"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    let scroll;

    if (typeof window !== "undefined") {
      import("locomotive-scroll").then((locomotiveModule) => {
        const LocomotiveScroll = locomotiveModule.default;

        scroll = new LocomotiveScroll({
          smooth: true,
          lerp: 0.1,
        });
      });
    }

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
