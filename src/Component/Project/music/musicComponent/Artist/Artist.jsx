import { useState } from "react";
import artistCss from "./Artist.module.css";
import artistimgs from "./atrist.jpeg";
const Artist = ({ artist, artistKey, setSelectedArtist }) => {
  const [showData, setShowData] = useState(false);
  function handleSelected(item) {
    setSelectedArtist(item);
  }
  return (
    <div className={artistCss.artistContainer}>
      <button onClick={() => setShowData(!showData)}>Back</button>
      {showData ? <p>hi</p> : <p>gggs</p>}
      {artistKey && artistKey?.tracks ? (
        <>
          {artistKey?.tracks?.items.map((item, index) => (
            <div className={artistCss.artistSubContainer} key={index}>
              <div className={artistCss.artistImg}>
                <img
                  className={artistCss.artistImgcover}
                  onClick={() => handleSelected(item)}
                  src={artistKey?.images[0]?.url}
                  alt=""
                />
                <div className={artistCss.textOverlay}>{item.name}</div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {artist?.items.map((item, index) => (
            <div className={artistCss.artistSubContainer} key={index}>
              <div className={artistCss.artistImg}>
                <img
                  className={artistCss.artistImgcover}
                  onClick={() => handleSelected(item)}
                  src={item?.images[0]?.url}
                  alt=""
                />
                <div className={artistCss.textOverlay}>{item.name}</div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Artist;
