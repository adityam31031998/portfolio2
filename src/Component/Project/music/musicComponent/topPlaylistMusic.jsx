import React from "react";
import styles from "../music.module.css";
function TopPlaylistMusic(album) {
  return (
    <div className={styles.topPlaylist}>
      {/* {test} */}
      {/* {album?.artists?.map((artist, index) => (
      <p key={index}>{artist.name}</p>
    ))} */}

      {album?.tracks?.items[0].preview_url && (
        <>
          <img src="" alt="" />
          <audio src={album.tracks.items[0].preview_url} controls></audio>
        </>
        // <img
        //   className={styles.albumImage}
        //   src={album.tracks[0].url}
        //   alt="loading"
        // />
      )}

      <div>
        <div></div>

        {album?.tracks?.items.map((item, index) => (
          <span key={index}>
            <audio controls src={item.preview_url}></audio>
          </span>
        ))}
      </div>
    </div>
  );
}

export { TopPlaylistMusic };
