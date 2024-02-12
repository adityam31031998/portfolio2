// Music.js

import React, { useEffect, useState } from "react";
import styles from "./music.module.css";
import { RecentPlay } from "./musicComponent/recentPlay";
import { MenuMusic } from "./musicComponent/menuMusic";
import { generateToken, fetchAlbumData, searchUrlCollect, categoriesMusic, artistAlbumFetch } from "./musicApi";
import { PlaylistMusic } from "./musicComponent/playlistMusic";
import { SearchSongMusic } from "./musicComponent/searchSongMusic";
import { TopPlaylistMusic } from "./musicComponent/topPlaylistMusic";
import { TreandingMusic } from "./musicComponent/treandingMusic";
// import { FavMusic } from "./musicComponent/favMusic";
import { ControlsMusic } from "./musicComponent/controlsMusic";
import { MusicProvider } from "./musicComponent/MusicContext";


const Music = (searchSelectdApi) => {
  var [accessToken, setAccessToken] = useState();
  const [album, setAlbum] = useState([]);
  const [artist, setArtist] = useState([]);
  
  const [categoryResponse, setCategoryResponse] = useState([]);
  const [leftSideVisible, setLeftSideVisible] = useState(true);

  useEffect(() => {
    if (!accessToken) {
      generateToken(setAccessToken);
    } else {
      fetchAlbumData(accessToken, setAlbum);
      searchUrlCollect("", accessToken);
      categoriesMusic(accessToken,setCategoryResponse)
      artistAlbumFetch(accessToken,setArtist)
      console.log(accessToken);
    }
  }, [accessToken]);

  const toggleLeftSide = () => {
    setLeftSideVisible(!leftSideVisible);
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <button
          className={`${styles.toggleButton1} ${
            leftSideVisible ? styles.visible : ""
          }`}
          onClick={toggleLeftSide}
        >
          <p className="">{leftSideVisible ? "close" : "open"}</p>
        </button>
        <div
          className={styles.musicLeft}
          style={{ zIndex: leftSideVisible ? 1 : 0 }}
        >
          <div className={styles.logo}></div>
          {leftSideVisible && (
            <>
              {MenuMusic()}
              <PlaylistMusic categoryResponse={categoryResponse}/>
            </>
          )}
        </div>
        <div className={styles.musicRight}>
          <MusicProvider>
            <SearchSongMusic accessToken={accessToken} />
            <RecentPlay />
          </MusicProvider>
          {TreandingMusic(artist)}
          {TopPlaylistMusic(album)}
          <div className={styles.bottomPlayList}>{ControlsMusic()}</div>
        </div>
      </div>
    </div>
  );
};

export default Music;
