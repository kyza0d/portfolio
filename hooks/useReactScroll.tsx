import { useEffect } from "react";
import { scroller } from "react-scroll";

function useReactScroll() {
  useEffect(() => {
    const anchors = document.querySelectorAll("a[href^='#']");
    const handleClick = (event: any) => {
      event.preventDefault();
      const id = event.target.getAttribute("href").substring(1);
      scroller.scrollTo(id, { offset: -60, duration: 800, smooth: "easeInOutCubic" });
    };

    anchors.forEach(anchor => anchor.addEventListener("click", handleClick));
    return () => anchors.forEach(anchor => anchor.removeEventListener("click", handleClick));
  }, []);
}

export default useReactScroll;
