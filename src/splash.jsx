import "./styles.css";
import react, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function splash() {
  const n = useRef(0);

  let style = useSpring({
    loop: () => {
      return 3 - 1 !== n.current++ ? { reverse: true } : false;
    },
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    delay: 250,
    onRest: () => {
      // alert(n.current);
      if (n.current == 2) {
        document.getElementsByClassName("splash")[0].style.display = "none";
      }
    }
  });

  return (
    <div className="splash">
      <animated.img
        style={style}
        className="logo"
        src="https://www.southfayette.org/sysimages/HeaderLogo.png"
        alt="logo"
      />
    </div>
  );
}
