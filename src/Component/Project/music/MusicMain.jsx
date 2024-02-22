import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Radio from "./musicComponent/Radio/Radio";
import Album from "./musicComponent/Albums/Album";
import SearchSongMusic from "./musicComponent/SeachSongMusic/searchSongMusic";
import Music from "./musicComponent/Music/Music";
import {
  artistAlbumFetch,
  fetchAlbumData,
  fetchRadio,
  generateToken,
  searchUrlCollect,
} from "./musicApi";
const MusicMain = () => {
  const [accessToken, setAccessToken] = useState();
  const [apiRadio, setApiRadio] = useState();
  const [album, setAlbum] = useState();
  const [audio, setAudio] = useState();
  const [artist, setArtist] = useState();

  useEffect(() => {
    if (!accessToken) {
      generateToken(setAccessToken);
    } else {
      fetchRadio(setApiRadio);
      fetchAlbumData(accessToken, setAlbum);
      searchUrlCollect("", accessToken);
      artistAlbumFetch(accessToken, setArtist);
    }
  }, [accessToken]);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Music
              album={album}
              accessToken={accessToken}
              setApiRadio={setApiRadio}
              setAlbum={setAlbum}
              setAccessToken={setAccessToken}
              setArtist={setArtist}
              artist={artist}
            />
          }
        />
        <Route
          path="radio"
          element={
            <Radio apiRadio={apiRadio} setAudio={setAudio} audio={audio} />
          }
        />
        {/* {console.log(selectedArtist)} */}
        <Route path="album" element={<Album />} />
        <Route
          path="SearchSong"
          element={<SearchSongMusic accessToken={accessToken} />}
        />
      </Routes>
    </div>
  );
};

export default MusicMain;
