import React, { useState } from "react";
import { Link } from "react-router-dom";
import music from "./music.module.css";
import searchImg from "../musicIcons/search.png";

// import SearchSongMusic from "../SeachSongMusic/searchSongMusic";
import Album from "../Albums/Album";

import AudioPlayer from "../../musicComponent/controls/AudioPlayer";

const Music = ({
  setAudio,
  album,
  accessToken,
  setAccessToken,
  setApiRadio,
}) => {
  const [selectedAlbum, setSelectedAlbum] = useState();
  return (
    <div className={music.musicContainer}>
      <div className={music.musicSubContainer}>
        <div className={music.musicLeft}>
          <div className={music.musicTitle}>
            <Link to="/portfolio/music">MyMusic</Link>
            {/* <a href="/portfolio/music">Home</a> */}
            <div className={music.musicCategory}>
              <Link to="radio">Radio</Link>
            </div>
          </div>
          <div className={music.musicCenter}>
            <div className={music.searchSongss}>
              <Link to="SearchSong">
                <div className={music.searchs}>
                  <img src={searchImg} className={music.searchIcon} alt="" />

                  <input
                    className={music.songSearch}
                    placeholder="Search For Songs"
                    type="search"
                  />
                </div>
              </Link>
            </div>

            <Album album={album} setSelectedAlbum={setSelectedAlbum} />
            <Album album={album} setSelectedAlbum={setSelectedAlbum} />
          </div>
          <div className={music.musicControl}>
            <AudioPlayer selectedAlbum={selectedAlbum} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
