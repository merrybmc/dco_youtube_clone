import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';

import Youtube, { search } from '../api/youtube';
import FakeYoutube from '../api/fakeYoutubeClient';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () =>
    // const youtube = new FakeYoutube();
    // return youtube.search(keyword);
    // const youtube = new Youtube();
    // return youtube.search(keyword);
    youtube.search(keyword)
  );

  return (
    <>
      <div>Videos {keyword ? `${keyword}` : 'hot trend'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...</p>}
      {videos?.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </>
  );
}
