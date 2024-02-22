import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import music from "./music.module.css";
import searchImg from "../musicIcons/search.png";

// import SearchSongMusic from "../SeachSongMusic/searchSongMusic";
import Album from "../Albums/Album";

import AudioPlayer from "../../musicComponent/controls/AudioPlayer";
import Artist from "../Artist/Artist";
import { fetchArtistData } from "../../musicApi";

const Music = ({
  setAudio,
  artist,
  album,
  accessToken,
  setAccessToken,
  setApiRadio,
}) => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedArtistSong, setSelectedArtistSong] = useState(null);

  const [artistKey, setArtistKey] = useState();
  const [selectedAlbum, setSelectedAlbum] = useState();
  useEffect(() => {
    fetchArtistData(accessToken, setArtistKey, selectedArtist);
  }, [selectedArtist, accessToken]);
  return (
    <div className={music.musicContainer}>
      <div className={music.musicSubContainer}>
        <div className={music.musicLeft}>
          <div className={music.musicTitle}>
            <p>
              <Link to="/portfolio/music">Home</Link>
              <div className={music.musicCategory}>
                <Link to="radio">Radio</Link>
              </div>
            </p>
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
            <Artist
              artistKey={artistKey}
              artist={artist}
              setSelectedArtist={setSelectedArtist}
              setSelectedArtistSong={setSelectedArtistSong}
            />
            <Album
              album={album}
              setSelectedAlbum={setSelectedAlbum}
              setSelectedArtistSong={setSelectedArtistSong}
            />
          </div>
          <div className={music.musicControl}>
            {selectedArtistSong ? (
              <AudioPlayer
                selectedArtistSong={selectedArtistSong}
                selectedArtist={selectedArtist}
              />
            ) : (
              <AudioPlayer selectedAlbum={selectedAlbum} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
