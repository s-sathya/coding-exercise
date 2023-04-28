import { useState, useEffect } from "react";

/**
 * Watches screen size and updates number of items that can be fit in one row
 * based on screen width
 *
 * @returns {Number} items per row
 */
export default function useMainContentWidth() {
  const [itemPerRow, setItemPerRow] = useState(1);
  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth < 816 ? window.innerWidth : 816;
      setItemPerRow(parseInt(windowWidth / 204));
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { mainContentWidth: itemPerRow * 204 };
}
