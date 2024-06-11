import { useEffect, useState } from "react";

const useFavicon = (init) => {
  const [favicon, setFavicon] = useState(init);

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = favicon;
    }
  }, [favicon]);

  return { favicon: favicon, setFavicon: setFavicon };
};

export default useFavicon;
