import React, { useEffect, useState } from "react";
// import "./searchSong.css";
import searchSongcss from "./search.module.css";
import searchImg from "../musicIcons/search.png";
import { searchUrlCollect } from "../../musicApi";
import { Link } from "react-router-dom";
import music from "./searchSong.module.css";
import AudioPlayer from "../controls/AudioPlayer";
// import AudioPlayer from "../controls/AudioPlayer";
const SearchSongMusic = ({ accessToken }) => {
  const [searchData, setSearchData] = useState("");
  var [searchResults, setSearchResults] = useState([]);
  const [searchToggle, setSearchToggle] = useState(false);
  const [isEmptySearch, setIsEmptySearch] = useState(false);
  var [searchSelectdApi, setSearchSelectedApi] = useState("");
  const searchArray = Object.entries(searchResults);
  const [audio, setAudio] = useState();

  var [selectCurentSong, setSelectCurentSong] = useState("");
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
        // console.log(accessToken);
      };
      fetchData();
    }
    // console.log(accessToken);
  }, [searchData, accessToken, searchSelectdApi]);

  function handleSearchResult() {
    return searchArray.map((items, index) => (
      <div className={music.gridLeft} key={index}>
        {items[1].items.map((itm, inddx) => (
          <div className={music.gridColumn} key={inddx}>
            <img
              onClick={() => {
                setSearchSelectedApi(itm);
                setAudio(itm);

                // setSearchedApi(itm); // Set context state here
              }}
              className={music.searchImages}
              src={itm?.images[0]?.url}
              alt=""
            />
            {/* {console.log(itm, "dddddddddd")} */}
          </div>
        ))}
      </div>
    ));
  }

  return (
    <div className={searchSongcss.musicContainer}>
      <div className={searchSongcss.musicSubContainer}>
        <div className={searchSongcss.musicLeft}>
          <div className={searchSongcss.musicTitle}>
            <p>
              <Link to="/portfolio/music">Back</Link>
            </p>
            <div className={searchSongcss.musicCategory}></div>
          </div>
          <div className={searchSongcss.musicCenter}>
            <div className={searchSongcss.searchSongss}>
              <div className={music.headder}>
                <div className={music.searchs}>
                  <input
                    className={music.songSearch}
                    placeholder="Search For Songs"
                    type="search"
                    value={searchData}
                    onChange={handleInputChange}
                  />
                  <img src={searchImg} className={music.searchIcon} alt="" />
                </div>
                {isEmptySearch ? (
                  <p>No results found.</p>
                ) : (
                  searchToggle && (
                    <div className={music.searchDetails}>
                      <div className={music.gridContainer}>
                        {handleSearchResult()}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className={searchSongcss.musicControl}>
            <AudioPlayer audio={audio} selectCurentSong={selectCurentSong} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSongMusic;
