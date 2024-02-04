"use client"

import { concat } from "utils";
import SideBar from "layout/Sidebar";
// import { Button } from "components/Common/Button";
import { FiMail, FiMenu, FiSettings, FiX } from "react-icons/fi";

import { useSidebar } from 'layout/Sidebar/context';
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils"

export const ToggleSidebar = () => {
  const { toggleSidebar, isSidebarVisible } = useSidebar();
  return (
    <div onClick={toggleSidebar}
      className="fixed left-[2%] top-[5%] z-40 flex cursor-pointer items-center text-sm text-lightgray transition-colors ease-in hover:text-white">
      {isSidebarVisible ? <FiX size={24} /> : <FiMenu size={24} />}
    </div>
  );
};

export const SettingsMenu = () => {
  const { animateSettings } = useSidebar();
  return (
    <div className="fixed bottom-[8%] left-[2%] cursor-pointer text-white"
      onClick={animateSettings}>
      <FiSettings size={22} />
    </div>
  );
};

const Header = () => {
  const { isSidebarVisible, toggleSidebar } = useSidebar();
  return (
    <>
      <ToggleSidebar />
      <SideBar />
      <SettingsMenu />
      <header
        id="header"
        className={concat(
          "w-full",
          "fixed left-0 top-[4%]",
          "flex items-center",
          "px-[6%] sm:pl-[4em]",
        )}>
        <Button className="ml-auto" variant="outline">
          <FiMail size={18} className='mr-2' />
          <a
            className="inline-flex items-center justify-center"
            href="#Contact">
            Contact
          </a>
        </Button>
      </header>
    </>
  );
};

export default Header;
