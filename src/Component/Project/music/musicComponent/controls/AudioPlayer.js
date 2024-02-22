import React, { useState, useRef, useEffect } from "react";
import "./control.css";
import pause from "./pause.png";
import play from "./play.png";
import volumeSpeaker from "./speaker.png";
import albumimgs from "./album.jpeg";

const AudioPlayer = ({
  audio,
  selectCurentSong,
  selectedAlbum,
  selectedArtistSong,
  selectedArtist,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [imageSong, setImageSong] = useState(null); // Initialize imageSong state with null
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);
  const sliderRef = useRef(null);
  const volumeRef = useRef(null);

  const togglePlay = () => {
    try {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Error toggling play/pause:", error);
    }
  };

  const updateImageSong = () => {
    // Clear previous value
    setImageSong(null);

    // Check conditions and set new value
    if (selectedArtistSong) {
      setImageSong(selectedArtist?.images[0]?.url);
    } else if (selectedAlbum) {
      setImageSong(albumimgs);
    } else if (audio && audio.votes) {
      setImageSong(audio.favicon);
    } else if (audio && audio.total_tracks) {
      setImageSong(audio.images[0].url?.images[0]?.url);
    }
  };

  useEffect(() => {
    // {
    //   console.log(selectedArtistSong, "selectedArtistSong");
    // }

    updateImageSong();
  }, [audio, selectedAlbum, selectedArtistSong, selectedArtist]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
      const percentage =
        (audioElement.currentTime / audioElement.duration) * 100;
      sliderRef.current.style.width = `${percentage}%`;
    };

    audioElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleVolumeChange = () => {
    const newVolume = volumeRef.current.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className="audioControl">
      <div className="audioBody">
        <div className="audioImgPlay">
          {/* Render imageSong if available */}
          {imageSong && (
            <img className="audioImgPlayapi" src={imageSong} alt="loading" />
          )}
        </div>
        <div className="seekBar">
          {/* {console.log(selectedAlbum, "selectedAlbum")} */}
          {selectedArtistSong && (
            <>
              {/* {(selectedAlbum = false)} */}
              <marquee>
                <b>Name:</b> {selectedArtistSong.name}
                <b>Type:</b> {selectedArtistSong.type}
              </marquee>
              <audio ref={audioRef} src={selectedArtistSong.preview_url} />
            </>
          )}
          {selectedAlbum && (
            <>
              {/* {(selectedArtistSong = false)} */}
              <marquee>
                <p>
                  <b>Name:</b> {selectedAlbum.name} <b>Type:</b>{" "}
                  {selectedAlbum.type}
                </p>
              </marquee>
              <audio ref={audioRef} src={selectedAlbum.preview_url} />
            </>
          )}
          {audio && audio?.votes && (
            <>
              <marquee>
                <p>
                  <b>Name:</b> {audio.name} <b>Country:</b> {audio.country}{" "}
                  <b>Language:</b>{" "}
                  {audio.language ? audio.language : "Not found"}
                </p>
                {imageSong && (
                  <img
                    className="audioImgPlayapi"
                    src={imageSong}
                    alt="loading"
                  />
                )}
              </marquee>
              <audio ref={audioRef} src={audio.url_resolved} />
            </>
          )}
          {audio?.total_tracks && (
            <>
              <marquee>
                <b>Name:</b> {audio.name} <b>release_date:</b>{" "}
                {audio.release_date} <b>album:</b> {audio.album_type}
              </marquee>
              <audio ref={audioRef} src={selectCurentSong} />
            </>
          )}
          <div className="range">
            <div className="slider" ref={sliderRef}></div>
          </div>
          <div className="volumeset">
            <img src={volumeSpeaker} className="speaker" alt="" />
            <input
              type="range"
              className="volumeRange"
              id="myRange"
              ref={volumeRef}
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
        <div className="playPause" onClick={togglePlay}>
          <img src={isPlaying ? pause : play} alt="" className="pauseIcon" />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
