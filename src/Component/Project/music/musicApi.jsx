// musicApi.jsx
import axios from "axios";
import {
  albumPoint,
  CLIENT_ID,
  CLIENT_SECRET,
  searchApi,
  categoriesApi,
  artistAlbumApi,
} from "./musicUrl";
function CreatedMusicAuth(accessToken) {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
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
    const response = await axios.get(albumPoint, authHeader);
    setAlbum(response.data);
  } catch (error) {
    console.error(
      "Error fetching album data:",
      error.response ? error.response.data : error.message
    );
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
      // console.log(serachSelectedSongApi.data.tracks.items[0]);
      setSelectCurentSong(
        serachSelectedSongApi.data.tracks.items[0].preview_url
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

const artistAlbumFetch = async (accessToken,setArtist) => {
  try {
    const artistHearder = CreatedMusicAuth(accessToken);
    const artistResponse = await axios.get(artistAlbumApi, artistHearder);
    if (artistResponse.data) {
      setArtist(artistResponse.data)
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
};
