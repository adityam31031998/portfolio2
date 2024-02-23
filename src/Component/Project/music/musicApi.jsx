import axios from "axios";
import {
  albumPoint,
  CLIENT_ID,
  CLIENT_SECRET,
  searchApi,
  categoriesApi,
  allRadio,
  artistAlbumApiKey,
  radioSearchUrl,
  radioCountryList,
  radioSelectedCountryApiKey,
} from "./musicUrl";
function CreatedMusicAuth(accessToken) {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
}
function radio() {
  return {
    headers: {
      "X-RapidAPI-Key": "b5e27c2640msh1e59a6758d4f99cp1d1a2ejsn723d16d2925f",
      // "X-RapidAPI-Key": " 4ba783b254msh168a992bf5db3efp1cfe83jsnb565a9fd8537",

      "X-RapidAPI-Host": "bando-radio-api.p.rapidapi.com",
    },
    params: {
      offset: "0",
      limit: "150",
    },
  };
}

async function generateToken(setAccessToken) {
  try {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };

    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      authParameters
    );
    const data = await response.json();
    setAccessToken(data.access_token);
    return data;
  } catch (error) {
    console.error("Error generating token:", error.message);
    throw error;
  }
}

const fetchAlbumData = async (accessToken, setAlbum) => {
  try {
    const authHeader = CreatedMusicAuth(accessToken);
    const albumResponse = await axios.get(albumPoint, authHeader);

    setAlbum(albumResponse.data);
  } catch (error) {
    console.error(
      "Error fetching album data:",
      error.response ? error.response.data : error.message
    );
  }
};
const fetchArtistData = async (accessToken, setArtistKey, selectedArtist) => {
  try {
    const authHeader = CreatedMusicAuth(accessToken);
    const artistResponse = await axios.get(selectedArtist?.href, authHeader);

    setArtistKey(artistResponse.data);
  } catch (error) {
    console.error(
      "Error fetching artist data:",
      error.response ? error.response.data : error.message
    );
  }
};
const fetchRadio = async (setApiRadio) => {
  try {
    const radioAuth = radio();
    const response = await axios.get(allRadio, radioAuth);
    setApiRadio(response.data);
  } catch (error) {
    console.log(error.message, "dddf");
  }
};

const searchUrlCollect = async (
  userSearch,
  accessToken,
  setSearchResults,
  searchSelectdApi,
  setSelectCurentSong
) => {
  try {
    if (accessToken && userSearch.trim() !== "") {
      const searchHeader = CreatedMusicAuth(accessToken);
      const searchUrl = `${searchApi}/search?q=${userSearch}&type=album`;
      const response = await axios.get(searchUrl, searchHeader);

      if (setSearchResults) {
        setSearchResults(response.data);
      }
      var ress = searchSelectdApi.href;

      var serachSelectedSongApi = await axios.get(ress, searchHeader);

      setSelectCurentSong(
        serachSelectedSongApi?.data?.tracks.items[0].preview_url
      );
    }
  } catch (error) {
    console.error("Error collecting search URL:", error.message);
    if (error.response) {
      console.error("Response:", error.response.data);
    }
  }
};
const categoriesMusic = async (accessToken, setCategoryResponse) => {
  try {
    const categoryHeader = CreatedMusicAuth(accessToken);

    const categoryResponse = await axios.get(categoriesApi, categoryHeader);
    if (categoryResponse.data) {
      setCategoryResponse(categoryResponse.data);
    }
  } catch (error) {
    console.error("Error fetching audiobook:", error.message);
  }
};

const searchRadio = async (searchInput, setGetSearchResult) => {
  try {
    const radioSearchApi = radio();
    const addInput = `${radioSearchUrl}${searchInput}`;
    const response = await axios.get(addInput, radioSearchApi);
    setGetSearchResult(response?.data);
  } catch (error) {
    console.log(error.message, "error in searchapi");
  }
};
const radiocountruListApi = async (setGetCountryList) => {
  try {
    const countryList = radio();
    const response = await axios.get(radioCountryList, countryList);

    setGetCountryList(response.data);
  } catch (error) {
    console.log(error.message, "error in countryList");
  }
};
const radioSelectedCounterApi = async (
  selectedCountryList,
  setGetCountrySelectedSong
) => {
  const radioApi = radio();
  const addcountryselected = `${radioSelectedCountryApiKey}${selectedCountryList}`;
  const selectedRadioApi = await axios.get(addcountryselected, radioApi);
  setGetCountrySelectedSong(selectedRadioApi.data);
};
const artistAlbumFetch = async (accessToken, setArtist) => {
  try {
    const artistHearder = CreatedMusicAuth(accessToken);
    const artistResponse = await axios.get(artistAlbumApiKey, artistHearder);

    if (artistResponse.data) {
      setArtist(artistResponse.data);
    }
  } catch (error) {
    console.log("Error message :", error.message);
  }
};

export {
  generateToken,
  fetchAlbumData,
  searchUrlCollect,
  categoriesMusic,
  artistAlbumFetch,
  fetchRadio,
  fetchArtistData,
  searchRadio,
  radiocountruListApi,
  radioSelectedCounterApi,
};
