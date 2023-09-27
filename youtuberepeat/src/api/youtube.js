import axios from 'axios';

export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
    // this.httpClient = axios.create({
    //   baseURL: 'https://www.googleapis.com/youtube/v3',
    //   params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    // });
  }

  async search(keyword) {
    // # = private
    // class 내부적으로는 호출이 가능하나 외부에서는 호출이 불가능
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((response) => response.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((response) => response.data.items);
  }
}
