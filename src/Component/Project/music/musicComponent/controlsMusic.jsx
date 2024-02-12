import React, { useState, useRef } from "react";
import styles from "../music.module.css";
import volume1 from "./music/volume.png";
import pause from "./music/pause3.png";
import play from "./music/play.png";
// import mp3 from "./music/ac.mp3";

function ControlsMusic() {
  const [volume, setVolume] = useState(50);
  const [isplay, setIsPlay] = useState(false);
  const [playtime, setPlayTime] = useState(0);
  const audioRef = useRef(null);
  // const clickRef = useRef();

  const PlayPause = () => {
    setIsPlay(!isplay);
  };
  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  function handlePlayTime(e) {
    const newPlayTime = +e.target.value;
    setPlayTime(newPlayTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newPlayTime;
    }
  }

  return (
    <div>
      <div className={styles.currentPlay}></div>
      <div className={styles.currentControls}>
        <div>
          {isplay ? (
            <img src={pause} onClick={PlayPause} alt="" width={"70px"} />
          ) : (
            <img src={play} onClick={PlayPause} alt="" width={"70px"} />
          )}
        </div>
        <div>
          <input
            type="range"
            id="playtime"
            name="playtime"
            value={playtime}
            onChange={handlePlayTime}
          />
        </div>
      </div>
      <div className={styles.volume}>
        <img
          src={volume1}
          width={"70px"}
          className={styles.volumeControl}
          alt=""
        />
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
        <span>{volume}</span>
      </div>
    </div>
  );
}

export { ControlsMusic };
