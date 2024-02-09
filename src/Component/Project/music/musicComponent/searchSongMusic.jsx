import React, { useEffect, useRef, useState } from "react";
import styles from "../music.module.css";
import { searchUrlCollect } from "../musicApi";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
// import TmpRecentPlay from "./tmpRecentPlay";
import { useMusicContext } from "./MusicContext"; // Added import
import searchImg from "./music/search.png"
import profileImg from "./music/profile.jpg"
const SearchSongMusic = ({ accessToken }) => {
  const { setSearchedApi } = useMusicContext(); // Added context

  const audioPlayer = useRef();
  const [isplaying, setIsPlaying] = useState(true);
  const [searchData, setSearchData] = useState("");
  var [searchResults, setSearchResults] = useState([]);
  const [searchToggle, setSearchToggle] = useState(false);
  const [isEmptySearch, setIsEmptySearch] = useState(false);
  var [searchSelectdApi, setSearchSelectedApi] = useState("");
  var [selectCurentSong, setSelectCurentSong] = useState("");
  const searchArray = Object.entries(searchResults);

  const handleInputChange = (e) => {
    const userSearch = e.target.value;
    if (userSearch === "") {
      setIsEmptySearch(true);
      setSearchData("");
      setSearchToggle(false);
    } else {
      setSearchData(userSearch);
      setIsEmptySearch(false);
      setSearchToggle(true);
    }
  };

  useEffect(() => {
    if (searchData !== "") {
      const fetchData = async () => {
        await searchUrlCollect(
          searchData,
          accessToken,
          setSearchResults,
          searchSelectdApi,
          setSelectCurentSong
        );
        console.log(accessToken);
      };
      fetchData();
    }
  }, [searchData, accessToken, searchSelectdApi]);

  function handleControlss() {
    setIsPlaying(!isplaying);
    if (isplaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }

  function handleSearchResult() {
    return searchArray.map((items, index) => (
      <div className={styles.gridLeft} key={index}>
        {items[1].items.map((itm, inddx) => (
          <div className={styles.gridColumn} key={inddx}>
            <img
              onClick={() => {
                setSearchSelectedApi(itm);
                setSearchedApi(itm); // Set context state here
              }}
              className={styles.searchImages}
              src={itm?.images[0]?.url}
              alt=""
            />
          </div>
        ))}
      </div>
    ));
  }

  return (
    <div className={styles.headder}>
      <div className={styles.searchs}>
        <input
          className={styles.songSearch}
          placeholder="Search For Songs"
          type="search"
          value={searchData}
          onChange={handleInputChange}
        />
        <img src={searchImg} className={styles.searchIcon}alt="" />
      </div>
      <div className={styles.profile}>
        <span className={styles.profiles}>
          <img
            src={profileImg}
            className={styles.image}
            alt=""
          />
          <span>Yalnee</span>
        </span>
      </div>
      {isEmptySearch ? (
        <p>No results found.</p>
      ) : (
        searchToggle && (
          <div className={styles.searchDetails}>
            <div className={styles.gridContainer}>
              {handleSearchResult()}
              <div className={styles.gridRight}>
                <div className={styles.gridRightBottom}>
                  <div className={styles.currentImages}>
                    {searchSelectdApi &&
                      searchSelectdApi.images &&
                      searchSelectdApi.images[0] && (
                        <img
                          src={searchSelectdApi.images[0].url}
                          className={styles.currentImage}
                          alt=""
                        />
                      )}
                  </div>
                  <div className={styles.currentText}>
                    <span>{searchSelectdApi.name}</span>
                  </div>
                  <div className={styles.currentAudio}>
                    <audio
                      ref={audioPlayer}
                      src={selectCurentSong}
                      preload="metadata"
                    ></audio>
                    <button>
                      back <BsArrowLeftShort />
                    </button>
                    <button onClick={handleControlss}>
                      {isplaying ? <FaPlay /> : <FaPause />}
                    </button>
                    <button>forword <BsArrowRightShort /></button>
                    <div>00:00</div>
                    <div>
                      {/* <input type="range" /> */}
                    </div>
                    <div>2:49</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export { SearchSongMusic };
