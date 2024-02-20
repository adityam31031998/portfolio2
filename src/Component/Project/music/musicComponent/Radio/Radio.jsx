import React, { useState } from "react";
import radioCss from "./radio.module.css";
import noImg from "../../nomusic.jpg";
import { Link } from "react-router-dom";
import AudioPlayer from "../controls/AudioPlayer";

const Radio = ({ apiRadio, setAudio, audio }) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(apiRadio?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter radio stations with URLs ending in ".mp3" or ".m3u8"
  const supportedRadioStations = apiRadio?.filter(
    (item) => item.url_resolved.endsWith(".mp3") || item.url_resolved
  );
  const currentItems = supportedRadioStations?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  function handleRadio(radio) {
    setAudio(radio);
  }

  return (
    <div className={radioCss.musicContainer}>
      <div className={radioCss.musicSubContainer}>
        <div className={radioCss.musicLeft}>
          <div className={radioCss.musicTitle}>
            <Link to="/portfolio/music">MyMusic</Link>
          </div>
          <div className={radioCss.musicCenter}>
            <div className={radioCss.radioAudio}>
              <div className={radioCss.radioList}>
                <div className={radioCss.radioListSize}>
                  {currentItems ? (
                    currentItems?.map((item, index) => (
                      <div
                        className={radioCss.radioBox}
                        key={index}
                        onClick={() => handleRadio(item)}
                      >
                        {item.favicon ? (
                          <div className={radioCss.radioim}>
                            <img
                              className={radioCss.radioImgs}
                              src={item.favicon}
                              alt=""
                            />
                          </div>
                        ) : (
                          <img
                            className={radioCss.radioImgs}
                            alt=""
                            src={noImg}
                          />
                        )}
                        <p>{item.name}</p>
                        {item.language ? (
                          <p>Lan:- {item.language}</p>
                        ) : (
                          <p>No Launge Found</p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p>Due to high response not able to fetch the data</p>
                  )}
                </div>
              </div>
              <div className={radioCss.pagination}>
                <button onClick={prevPage} disabled={currentPage === 1}>
                  Previous
                </button>
                <span>{currentPage}</span> / <span>{totalPages}</span>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <div className={radioCss.musicControl}>
            <AudioPlayer audio={audio} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radio;
