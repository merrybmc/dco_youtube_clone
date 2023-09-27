import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import FakeYoutube from '../api/fakeYoutubeClient';
import YoutubeClient from '../api/youtubeClient';
import FakeYoutubeClient from '../api/fakeYoutubeClient';

export const YoutubeApiContext = createContext();

const client = new YoutubeClient();
const fakeClient = new FakeYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
