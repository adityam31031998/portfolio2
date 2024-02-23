import React, { useEffect, useState } from "react";
import radioCss from "./radio.module.css";
import noImg from "../../musicComponent/musicIcons/music.jpg";
import { Link } from "react-router-dom";
import searchIoc from "../../musicComponent/musicIcons/search.png";
import AudioPlayer from "../controls/AudioPlayer";
import "../../comman.css";
import homeImage from "../../musicComponent/musicIcons/home.png";
import countryImg from "../../musicComponent/musicIcons/countryRadio.png";
import {
  radioSelectedCounterApi,
  radiocountruListApi,
  searchRadio,
} from "../../musicApi";

const Radio = ({ apiRadio, setAudio, audio }) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState();
  const [getSearchResult, setGetSearchResult] = useState();
  const [getCountryList, setGetCountryList] = useState();
  const [getCountrySelectedSong, setGetCountrySelectedSong] = useState();
  const [showData, setShowData] = useState(true);

  const [selectedCountryList, setSelectedCountryList] = useState();
  const [searchResultPage, setSearchResultPage] = useState(1);
  const [countryListPage, setCountryListPage] = useState(1);
  const [countrySelectedSongPage, setCountrySelectedSongPage] = useState(1);

  useEffect(() => {
    searchRadio(searchInput, setGetSearchResult, searchResultPage);
    radiocountruListApi(setGetCountryList, countryListPage);
    radioSelectedCounterApi(
      selectedCountryList,
      setGetCountrySelectedSong,
      countrySelectedSongPage
    );
  }, [
    searchInput,
    selectedCountryList,
    searchResultPage,
    countryListPage,
    countrySelectedSongPage,
  ]);

  const handleSearchResultPageChange = (page) => {
    setSearchResultPage(page);
  };

  const handleCountryListPageChange = (page) => {
    setCountryListPage(page);
  };

  const handleCountrySelectedSongPageChange = (page) => {
    setCountrySelectedSongPage(page);
  };

  const supportedRadioStations = apiRadio?.filter(
    (item) => item.url_resolved.endsWith(".mp3") || item.url_resolved
  );
  const currentItems = supportedRadioStations?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(supportedRadioStations?.length / itemsPerPage);

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
    if (radio) {
      setAudio(radio);
    }
  }

  return (
    <div className={radioCss.musicContainer}>
      <div className={radioCss.musicSubContainer}>
        <div className={radioCss.musicLeft}>
          <div className={radioCss.musicTitle}>
            <p className="label">
              <Link className="subIcon" to="/portfolio/music">
                <div className="musicCategory">Home</div>
                <img alt="" className="radioIcon" src={homeImage} />
              </Link>
            </p>
          </div>
          <div className={radioCss.musicCenter}>
            <div className={radioCss.searchRadio}>
              <img alt="" src={searchIoc} className={radioCss.img} />
              <input
                type="text"
                placeholder="SearchSong"
                onChange={(e) => setSearchInput(e.target.value)}
                className={radioCss.searchRadioInput}
              />
            </div>
            <div className={radioCss.radioAudio}>
              <div className={radioCss.radioList}>
                <div className={radioCss.radioListSize}>
                  {getSearchResult ? (
                    getSearchResult?.map((item, index) => (
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
            {/* country */}
            <div className={radioCss.radioAudio}>
              <div className={radioCss.radioList}>
                <div className={radioCss.radioListSize}>
                  {showData ? (
                    <>
                      {getCountryList?.map((item, index) => (
                        <div
                          className={radioCss.radioBox}
                          onClick={() => {
                            setSelectedCountryList(item.name);
                            setShowData(!showData);
                          }}
                          key={index}
                        >
                          <img
                            className={radioCss.radioImgs}
                            alt=""
                            src={countryImg}
                          />
                          <p>{item?.name}</p>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <button onClick={() => setShowData(!showData)}>
                        back
                      </button>
                      {getCountrySelectedSong?.map((item, index) => (
                        <div
                          className={radioCss.radioBox}
                          onClick={() => setAudio(item)}
                          key={index}
                        >
                          <img
                            className={radioCss.radioImgs}
                            alt=""
                            src={item?.favicon ? item.favicon : countryImg}
                          />
                          <p>{item.name}</p>
                        </div>
                      ))}
                    </>
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
            {/* music radio */}
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
