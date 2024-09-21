import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import music from "./music.module.css";
import searchImg from "../musicIcons/search.png";
import Album from "../Albums/Album";
import "../../comman.css";
import AudioPlayer from "../../musicComponent/controls/AudioPlayer";
import Artist from "../Artist/Artist";
import { fetchArtistData } from "../../musicApi";
import radioImage from "../../musicComponent/musicIcons/radio1.png";
import homeImage from "../../musicComponent/musicIcons/home.png";
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
    // g
    <div className={music.musicContainer}>
      <div className={music.musicSubContainer}>
        <div className={music.musicLeft}>
          <div className={music.musicTitle}>
            <p className="label">
              <Link className="subIcon" to="/portfolio/music">
                <div className="musicCategory">Home</div>
                <img alt="" className="radioIcon" src={homeImage} />
              </Link>
              <Link className="subIcon" to="radio">
                <div className="musicCategory">Radio</div>
                <img alt="" className="radioIcon" src={radioImage} />
              </Link>

              {/* <Link to="radio">
                <div className={music.musicCategory}>Radio</div>
                <img alt="" src={radioImage} />
              </Link> */}
            </p>
          </div>
          <div className={music.musicCenter}>
            <div className={music.searchSongss}>
              <Link to="SearchSong">
                <div className={music.searchMusic}>
                  <img src={searchImg} className={music.img} alt="" />

                  <input
                    className={music.searchMusicInput}
                    placeholder="Search For Songs"
                    type="search"
                  />
                </div>
              </Link>
            </div>
            <p style={{ marginLeft: "3%" }}>Artist</p>
            <Artist
              artistKey={artistKey}
              artist={artist}
              setSelectedArtist={setSelectedArtist}
              setSelectedArtistSong={setSelectedArtistSong}
            />
            <p style={{ marginLeft: "3%" }}>Albums</p>
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
