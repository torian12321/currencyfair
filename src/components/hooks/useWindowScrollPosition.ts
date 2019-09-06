import { useState /*, useEffect*/ } from "react";
import { useEventListener } from "./useEventListener";

const _w = window;
const getPosition = () => ({
  x: _w.pageXOffset,
  y: _w.pageYOffset
});

const useWindowScrollPosition = () => {
  const [position, setPosition] = useState(getPosition);

  const handleScroll = () => {
    setPosition(getPosition());
  };

  useEventListener("scroll", handleScroll, window);

  return {
    position,
    positionX: position.x,
    positionY: position.y
  };
};

export { useWindowScrollPosition };
