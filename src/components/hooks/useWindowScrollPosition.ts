import { useState, useEffect } from "react";

const _w = window;
const getPosition = () => ({
  x: _w.pageXOffset,
  y: _w.pageYOffset
});

const useWindowScrollPosition = () => {
  const [position, setPosition] = useState(getPosition());

  useEffect(() => {
    const handleScroll = () => {
      setPosition(getPosition());
    };

    _w.addEventListener("scroll", handleScroll);

    return () => {
      _w.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    position,
    positionX: position.x,
    positionY: position.y
  };
};

export { useWindowScrollPosition };
