"use client"

import GradientDark from "layout/Gradient/gradient-dark";
import GradientLight from "layout/Gradient/gradient-light";

import { useEffect } from "react";
import { useSettings } from "../Settings/context";
import { useTheme } from "next-themes";

const Backdrop = () => {
  const { theme } = useTheme();
  let { settings } = useSettings();

  useEffect(() => {
    let gradient;
    if (theme === 'dark') {
      gradient = new GradientDark();
    } else {
      gradient = new GradientLight();
    }
    gradient.initGradient("#gradient-canvas");
  }, [theme]);

  return (
    <canvas id="gradient-canvas" data-transition-in className={`fixed z-[-1] top-0 ${settings.gradient && 'hidden'}`}></canvas>
  );
}

export default Backdrop;
