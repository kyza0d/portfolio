import { useSettings } from "@/layout/Settings/context";
import { useEffect } from "react";
import { scroller } from "react-scroll";

function useReactScroll() {
  const { settings } = useSettings();

  useEffect(() => {
    const anchors = document.querySelectorAll("a[href^='#']");

    const handleClick = (event: any) => {
      event.preventDefault();
      const id = event.currentTarget.getAttribute("href").substring(1);
      scroller.scrollTo(id, { offset: -60, duration: settings.animations ? 0 : 700, smooth: "easeInOutQuart" });
    };

    anchors.forEach(anchor => anchor.addEventListener("click", handleClick));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener("click", handleClick));
    };
  }, [settings]);

  return null;
}

export default useReactScroll;
