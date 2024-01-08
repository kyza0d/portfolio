"use client"

import Gradient from "layout/Gradient/gradient";
import { useEffect } from "react";

const gradient = new Gradient();

const Backdrop = () => {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <canvas id="gradient-canvas" data-transition-in className="fixed z-[-1]" />
  )
}

export default Backdrop;
