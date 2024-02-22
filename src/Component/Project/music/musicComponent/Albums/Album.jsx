import albumCss from "./album.module.css";
import albumimgs from "./album.jpeg";
const Album = ({ album, setSelectedAlbum, setSelectedArtistSong }) => {
  function handleSelected(item) {
    setSelectedAlbum(item);
    setSelectedArtistSong("");
  }
  return (
    <div className={albumCss.albumContainer}>
      {album?.tracks?.items.map((item, index) => (
        <div className={albumCss.albumSubContainer} key={index}>
          <div className={albumCss.albumImg}>
            <img
              className={albumCss.albumImgcover}
              onClick={() => handleSelected(item)}
              src={albumimgs}
              alt=""
            />
            <div className={albumCss.textOverlay}>{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Album;
