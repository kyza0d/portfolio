"use client"

import { concat } from "utils";
import SideBar from "layout/Sidebar";
import { Button } from "components/Common/Button";
import { FiMail, FiMenu, FiSettings } from "react-icons/fi";

import { useSidebar } from 'layout/Sidebar/context';

export const ToggleSidebar = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div onClick={toggleSidebar}
      className="fixed left-[3%] top-[8%] z-10 flex cursor-pointer items-center text-sm text-lightgray transition-colors ease-in hover:text-white">
      <FiMenu size={28} />
    </div>
  );
};

export const SettingsMenu = () => {
  const { toggleSettings } = useSidebar();
  return (
    <div className="fixed bottom-[8%] left-[3%] cursor-pointer text-white"
      onClick={toggleSettings}>
      <FiSettings size={22} />
    </div>
  );
};

const Header = () => {
  return (
    <>
      <ToggleSidebar />
      <SideBar />
      <SettingsMenu />
      <header
        id="header"
        className={concat(
          "w-full",
          "fixed left-0 top-[8%]",
          "flex items-center",
          "px-[3%] sm:pl-[4em]",
        )}>
        <Button variant="normal" className="ml-auto" size="small">
          <a
            className="inline-flex items-center justify-center text-lightgray">
            Download CV
          </a>
        </Button>
        <Button className="border-2 border-gray" size='small'>
          <FiMail size={18} className='mr-2' />
          <a
            className="inline-flex items-center justify-center">
            Contact
          </a>
        </Button>
      </header>
    </>
  );
};

export default Header;
