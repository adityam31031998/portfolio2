import { useState } from "react";
import artistCss from "./Artist.module.css";
import artistimgs from "./atrist.jpeg";

const Artist = ({
  artist,
  artistKey,
  setSelectedArtist,
  setSelectedArtistSong,
}) => {
  const [showData, setShowData] = useState(true);

  function handleHide(item) {
    setSelectedArtist(item);
  }

  return (
    <div className={artistCss.aartistContainer}>
      {showData ? (
        <>
          {artist?.items.map((item, index) => (
            <div className={artistCss.aartistSubContainer} key={index}>
              <div className={artistCss.aartistImg}>
                <img
                  className={artistCss.aartistImgcover}
                  onClick={() => {
                    handleHide(item);
                    setShowData(false);
                  }}
                  src={item?.images[0]?.url}
                  alt=""
                />
                <div className={artistCss.atextOverlay}>{item.name}</div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>{<button onClick={() => setShowData(true)}>back</button>}</div>
      )}
      {artistKey?.tracks?.items.map((item, index) => (
        <div className={artistCss.aartistSubContainer} key={index}>
          <div className={artistCss.aartistImg}>
            <img
              className={artistCss.aartistImgcover}
              src={artistKey?.images[0]?.url}
              onClick={() => setSelectedArtistSong(item)}
              alt=""
            />
            <div className={artistCss.atextOverlay}>{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artist;
