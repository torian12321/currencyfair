import { useState, useEffect } from "react";

const useWindowScrollPosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const getPosition = () => ({
    x: window.pageXOffset,
    y: window.pageYOffset
  });

  useEffect(() => {
    const handleScroll = () => {
      setPosition(getPosition());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    position,
    positionX: position.x || 0,
    positionY: position.y || 0
  };
};

export { useWindowScrollPosition };
