import React, { useState, useRef, useEffect } from "react";
import "./control.css";
import Marquee from "react-fast-marquee";
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
  const [imageSong, setImageSong] = useState(null);
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

  useEffect(() => {
    const updateImageSong = () => {
      setImageSong(null);

      if (selectedArtistSong) {
        setImageSong(selectedArtist?.images[0]?.url);
      } else if (selectedAlbum) {
        setImageSong(albumimgs);
      } else if (audio && audio.votes) {
        setImageSong(audio.favicon);
      } else if (audio && audio.total_tracks) {
        setImageSong(audio?.images[0]?.url);
      }
    };

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
  }, [currentTime]);

  const handleVolumeChange = () => {
    const newVolume = volumeRef.current.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className="audioControl">
      <div className="audioBody">
        <div className="audioImgPlay">
          {imageSong && (
            <img className="audioImgPlayapi" src={imageSong} alt="loading" />
          )}
        </div>
        <div className="seekBar">
          {selectedArtistSong && (
            <>
              <Marquee>
                <b>Name:</b> {selectedArtistSong?.name}
                <b>Type:</b> {selectedArtistSong?.type}
              </Marquee>
              <audio ref={audioRef} src={selectedArtistSong.preview_url} />
            </>
          )}
          {selectedAlbum && (
            <>
              <Marquee>
                <p>
                  <b>Name:</b> {selectedAlbum?.name} <b>Type:</b>{" "}
                  {selectedAlbum?.type}
                </p>
              </Marquee>
              <audio ref={audioRef} src={selectedAlbum.preview_url} />
            </>
          )}
          {audio && audio?.votes && (
            <>
              <Marquee>
                <p>
                  <b>Name:</b> {audio.name} <b>Country:</b> {audio.country}{" "}
                  <b>Language:</b>{" "}
                  {audio.language ? audio.language : "Not found"}
                </p>
              </Marquee>
              <audio ref={audioRef} src={audio.url_resolved} />
            </>
          )}
          {audio?.total_tracks && (
            <>
              <Marquee>
                <b>Name:</b> {audio?.name} <b>release_date:</b>{" "}
                {audio?.release_date} <b>album:</b> {audio?.album_type}
              </Marquee>
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
