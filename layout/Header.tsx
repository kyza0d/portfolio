"use client"

import SideBar from "layout/Sidebar";
import { FiMail, FiMenu, FiSettings, FiX } from "react-icons/fi";

import { useSidebar } from 'layout/Sidebar/context';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const Header = () => {
  const { isSidebarVisible, toggleSidebar, animateSettings } = useSidebar();
  return (
    <>
      <div className="z-20 fixed bottom-[8%] left-[2%] cursor-pointer"
        onClick={animateSettings}>
        <FiSettings size={22} className="text-slate-600 dark:text-white" />
      </div>
      <SideBar />
      <header
        id="header"
        className="z-20 w-full h-0 top-12 fixed mx-auto flex items-center px-6 left-1/2 transform -translate-x-1/2">

        <Button variant="outline" onClick={toggleSidebar} size="icon">
          {isSidebarVisible ? <FiX size={24} /> : <FiMenu size={24} />}
        </Button>

        <Button variant="outline" className="ml-auto mr-2">
          <FiMail size={18} className='mr-2' />
          <a
            className="inline-flex items-center justify-center"
            href="#Contact">
            Contact
          </a>
        </Button>
        <ModeToggle />
      </header>
    </>
  );
};

export default Header;
