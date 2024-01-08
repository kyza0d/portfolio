"use client"

import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { concat } from 'utils';
import { FiChevronDown, FiHome, FiUser, FiTool, FiPaperclip, FiMessageSquare, FiUsers, FiEdit, FiSettings, FiX } from 'react-icons/fi';
import { Heading } from 'layout/Typeography';
import Toggle from 'components/Common/Toggle';
import { useSidebar } from 'layout/Sidebar/context';
import { useSettings } from 'layout/Settings/context';

// Define prop types for ListItem
interface ListItemProps {
  children: React.ReactNode;
  icon: React.ReactElement;
}

// Define prop types for Setting
interface SettingProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

// Define prop types for DropDown
interface DropDownProps {
  title: string;
  items: React.ReactNode[];
  icon: React.ReactElement;
  className?: string;
  isSettings?: boolean;
}

// ListItem Component
const ListItem = ({ children, icon }: ListItemProps) => (
  <li className="mb-6 inline-flex items-center px-4">
    <div className="mr-3 flex h-[1.40em] w-[1.40em] items-center">
      {React.cloneElement(icon, { className: 'fill text-white' })}
    </div>
    {children}
  </li>
);

// Setting Component
const Setting = ({ children, title, className }: SettingProps) => (
  <div>
    {title}
    <div className={concat('mb-6 mt-3 flex justify-between rounded-md border border-gray p-4', className)}>
      {children}
    </div>
  </div>
);

const DropDown = ({ title, items, icon, className, isSettings }: DropDownProps) => {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLUListElement>(null);
  const { collapsedItems, toggleItemCollapse } = useSidebar();
  const isCollapsed = collapsedItems[title];

  useEffect(() => {
    if (isCollapsed && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isCollapsed]);

  return (
    <div className={`border-b border-b-[#293345] ${className} ${isSettings ? 'py-[0px]' : ''}`}>

      <div className={`flex cursor-pointer items-center h-[50px] px-4 ${isSettings ? 'border-t border-t-[#293345] bg-[#0e1a26]' : ''}`} onClick={() => toggleItemCollapse(title)}>
        <div className="mr-3 h-[1.40em] w-[1.40em]">
          {React.cloneElement(icon, { className: 'fill text-white' })}
        </div>
        <span className="mr-auto inline-block">{title}</span>
        <FiChevronDown className={`${isSettings ? (isCollapsed ? 'rotate-[0deg]' : 'rotate-[-180deg]') : (isCollapsed ? 'rotate-[-180deg]' : '')} transform transition-transform`} />
      </div>

      <CSSTransition
        in={isCollapsed}
        timeout={200}
        classNames="dropdown"
        unmountOnExit
        onEnter={() => {
          if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
          }
        }}
        onExit={() => setContentHeight(0)}
      >
        <ul
          ref={contentRef}
          className={`overflow-hidden transition-max-height duration-200 ease-in-out ${isSettings ? 'border-t border-t-[#293345] bg-[#06101A]' : ''}`}
          style={{ maxHeight: `${contentHeight}px` }}
        >
          {items.map((item, key) => (
            <li className="my-1 px-4 py-1" key={key}>
              {item}
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  )
};

// SideBar Component
const SideBar = () => {
  const { isSidebarVisible, toggleSidebar } = useSidebar();
  const { toggleReduceMotion, toggleBackdrop } = useSettings();


  return (
    <div id="sidebar" className={concat('h-screen', 'fixed top-0 z-30', 'scrollbar overflow-y-scroll', 'z-10 translate-x-[-100%]', 'border-r border-[#293345]', 'transition-translate duration-500', 'flex flex-col justify-start', 'bg-[#06101a]', isSidebarVisible ? 'translate-x-[0%]' : 'translate-x-[-100%]', 'w-[20%] min-w-[300px] text-sm')}>

      <div onClick={toggleSidebar}
        className="fixed right-[3%] top-[3%] z-30 flex cursor-pointer items-center text-sm text-lightgray transition-colors ease-in hover:text-white">
        <FiX size={28} />
      </div>

      <ul className="flex flex-grow flex-col justify-between text-gray">
        <div className={concat(
          'items-startp-4 mb-8 flex flex-col p-4 pt-6',
          // 'border-b border-b-[#293345] bg-[#040a11]'
          'border-b border-b-[#293345]'
        )}>
          <Heading size='xl' className='text-white'>
            Evan Smith
          </Heading>
          <Heading className="text-gray" size='sm'>
            Software Engineer
          </Heading>
        </div>
        <ListItem icon={<FiHome />}>Home</ListItem>
        <ListItem icon={<FiUser />}>About</ListItem>
        <ListItem icon={<FiTool />}>Skills</ListItem>
        <ListItem icon={<FiEdit />}>Blog</ListItem>
        <DropDown
          icon={<FiPaperclip />}
          title="Projects"
          items={["https://placeholder.com", "https://placeholder.com", "https://placeholder.com"]}
        />
        <DropDown
          icon={<FiMessageSquare />}
          title="Contact"
          items={[
            <div key="email" className="flex w-full justify-between">
              Email: <span>contact@kyza.dev</span>
            </div>,
            <div key="phone" className="flex w-full justify-between">
              Phone: <span>+1 (123) 456-7890</span>
            </div>,
            <div key="discord" className="flex w-full justify-between">
              Discord: <span>kyza#9474</span>
            </div>,
          ]}
        />
        <DropDown
          title="Socials"
          icon={<FiUsers />}
          items={[
            <div key="github" className="flex w-full justify-between">
              Github: <span>github.com/username/</span>
            </div>,
            <div key="email" className="flex w-full justify-between">
              Instagram: <span>instagram.com/username/</span>
            </div>,
            <div key="twitter" className="flex w-full justify-between">
              Twitter: <span>twitter.com/username/</span>
            </div>,
            <div key="linkedin" className="flex w-full justify-between">
              Linkedin: <span>linkedin.com/in/username/</span>
            </div>,
          ]}
        />

        <div className="mt-auto" />

        {/* Site Settings */}
        <DropDown
          title="Settings"
          isSettings={true}
          items={[
            <Setting key="gradient" title="Gradient">
              <Toggle values={["Off", "On"]} callback={() => toggleBackdrop} />
            </Setting>,
            <Setting key="animations" title="Animations">
              <Toggle values={["Off", "On"]} callback={() => toggleReduceMotion} />
            </Setting>,
          ]}
          className={concat("sticky bottom-0 left-0 mt-auto border-b-0 text-gray", "h-fit w-full")}
          icon={<FiSettings />}
        />
      </ul >
    </div >
  );
};

export default SideBar;
