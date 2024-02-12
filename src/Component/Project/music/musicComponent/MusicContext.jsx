// MusicContext.js
import { createContext, useContext, useState } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [searchSelectdApi, setSearchSelectedApi] = useState(null);

  const setSearchedApi = (api) => {
    setSearchSelectedApi(api);
  };

  return (
    <MusicContext.Provider value={{ searchSelectdApi, setSearchedApi }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  return useContext(MusicContext);
};
