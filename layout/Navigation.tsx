"use client";

import { useEffect } from "react";

import { Small } from "layout/Typeography";

import useReactScroll from 'hooks/useReactScroll';
import { concat } from "@/utils";

// Took insperation from https://www.gent.media/manrope
// Navigation component that displays a vertical navigation pane
// on the left side of the screen that changes based on the user's
// scroll position or mouse movement

const Navigation = () => {
  useEffect(() => {
    // Remove duration of transition on load
    const navigation_items = document.getElementsByClassName("navigation-item");
    Array.from(navigation_items).forEach((item) => {
      setTimeout(() => {
        item.classList.remove("transition-none");
      }, 300);
    });
  });

  // Returns the id of the section that the user is currently viewing
  function getCurrentSection() {
    const sections = document.querySelectorAll("section");

    // Convert NodeList to an array
    const sectionsArray = Array.from(sections);

    // Get an array of objects containing the id and top/bottom positions of each section
    const sectionsData = sectionsArray.map((section) => {
      const rect = section.getBoundingClientRect();
      return {
        id: section.id,
        top: rect.top + window.scrollY,
        bottom: rect.top + rect.height + window.scrollY,
      };
    });

    const offset = 500; // adjust as needed

    let scrollPos = window.scrollY;
    scrollPos += offset;

    let currentSection = sectionsData[0].id;

    // Find the current section based on the user's scroll position
    for (const section of sectionsData) {
      if (scrollPos >= section.top && scrollPos < section.bottom) {
        currentSection = section.id;
        break;
      }
    }
    return currentSection;
  }

  useEffect(() => {
    // Get the current section that the user is viewing
    let currentSection = getCurrentSection();

    // Get all navigation items
    const items = document.querySelectorAll(".navigation-item") as NodeListOf<HTMLElement>;

    // Updates the styles of the navigation items based on the given y-coordinate
    function updateNavigationItems(y: number) {
      let closestItem: HTMLElement | null = null;

      let closest_distance = Infinity;

      // Find the navigation item closest to the given y-coordinate
      items.forEach((item) => {
        const itemY = item.getBoundingClientRect().y;
        const distance = Math.abs(itemY - y);

        if (distance < closest_distance) {
          closestItem = item;
          closest_distance = distance;
        }

        // Update styles of all navigation items based on their distance from the y-coordinate
        item.style.transform = `scale(${1 - distance / 400})`;
        item.style.opacity = `${1 - distance / 250}`;
      });

      // Remove 'active' class from all navigation items
      items.forEach((item) => item.classList.remove("active"));

      // Add 'active' class to the closest navigation item
      if (closestItem != null) {
        (closestItem as HTMLElement).classList.add("active");
      }
    }
    // Get the navigation pane element
    const navigation_pane = document.querySelector("#navigation-pane");

    let animating = false;

    // Add event listeners to the navigation pane to track when the mouse enters or leaves the pane
    navigation_pane?.addEventListener("mouseenter", () => {
      animating = true;
    });

    navigation_pane?.addEventListener("mouseleave", () => {
      animating = false;
    });

    let mouse_y = 0;

    // prettier-ignore
    // Assign mouse_y with with with cursor.clientY instead of 0
    document.addEventListener("mousemove", (cursor) => {
      const navigation_rect = navigation_pane?.getBoundingClientRect();

      if (animating && navigation_rect &&
        cursor.clientX >= navigation_rect.left && cursor.clientX <= navigation_rect.right &&
        cursor.clientY >= navigation_rect.top && cursor.clientY <= navigation_rect.bottom) {
        mouse_y = cursor.clientY;
      }
    });

    let current_section_y = 0;

    // Update the current section when the user scrolls
    window.addEventListener("scroll", () => {
      currentSection = getCurrentSection();
    });

    // Animate the navigation items
    function animate() {
      requestAnimationFrame(animate);

      if (animating == true) {
        // Update mouseY with the current y-coordinate of the mouse
        document.addEventListener("mousemove", (e) => {
          mouse_y = e.clientY;
        });

        // Update the navigation items based on the mouse's y-coordinate
        updateNavigationItems(mouse_y);
      } else {
        // Get the y-coordinate of the current section in the navigation pane
        current_section_y = document
          .querySelector(`#navigation-pane .${currentSection}`)
          ?.getBoundingClientRect().y as number;
        // Update the navigation items based on the current section's y-coordinate
        updateNavigationItems(current_section_y);
      }
    }

    animate();
  });

  type ItemProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
  };

  // Item is a functional component that displays a navigation item
  // with the given children as the text and href as the link destination
  const Item = ({ children, href, className }: ItemProps) => {

    return (
      <div className="text-lg text-gray transition-none">
        <a className={concat(className, 'navigation-item block py-1 ')} href={href}>
          {children}
        </a>
      </div>
    );
  };

  useReactScroll();

  return (
    <ul
      className="fixed left-[2%] top-[50%] flex translate-y-[-50%] flex-col lg:hidden"
      id="navigation-pane">
      <Item className="Home" href="#Home">
        Home
      </Item>
      <Item className="About" href="#About">
        About
      </Item>
      <Item className="Skills" href="#Skills">
        Skills
      </Item>
      <Item className="Projects" href="#Projects">
        Projects
      </Item>
      <Item className="Contact" href="#Contact">
        Contact
      </Item>
    </ul>
  );
};

export default Navigation;
