// musicurl.js
const albumPoint = "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy";

// const CLIENT_ID = "4d3d492fe8214029ac943011f65b04f2";
// const CLIENT_SECRET = "b64c3bda56b54c9c81dcf96694f02934";

const CLIENT_ID = "a1dc84ca845645a09b078e173ab2e927";
const CLIENT_SECRET = "118ba62ef434431fade936d0ffba7f43";
var searchApi = "https://api.spotify.com/v1";
// var audioBookApi="https://api.spotify.com/v1/audiobooks/7iHfbu1YPACw6oZPAFJtqe"
var artistAlbumApiKey =
  "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums?limit=50";
var categoriesApi = "https://api.spotify.com/v1/browse/categories";
var playListApi = "https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n";
var allRadio = "https://bando-radio-api.p.rapidapi.com/stations";
var radioSearchUrl = "https://bando-radio-api.p.rapidapi.com/stations/byname/";
var radioCountryList = "https://bando-radio-api.p.rapidapi.com/countries";
var radioSelectedCountryApiKey =
  "https://bando-radio-api.p.rapidapi.com/stations/bycountry/";
export {
  albumPoint,
  CLIENT_ID,
  CLIENT_SECRET,
  searchApi,
  categoriesApi,
  artistAlbumApiKey,
  playListApi,
  allRadio,
  radioSearchUrl,
  radioCountryList,
  radioSelectedCountryApiKey,
};
