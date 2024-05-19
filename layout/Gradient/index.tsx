"use client"

import Gradient from "layout/Gradient/gradient";
import { useEffect } from "react";
import { useSettings } from "../Settings/context";
import { useTheme } from "next-themes"

const gradient = new Gradient();

const Backdrop = () => {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  let { settings } = useSettings();
  const { theme } = useTheme();

  console.log(theme)

  return (
    <canvas
      id="gradient-canvas" data-transition-in className={`fixed z-[-1] top-0 ${settings.gradient && 'hidden'}`}></canvas>
  )
}

export default Backdrop;
