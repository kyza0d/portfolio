"use client"

import React, { useEffect, useRef, useState } from 'react';

import { concat } from 'utils';

import { FiChevronDown, FiHome, FiUser, FiTool, FiPaperclip, FiMessageSquare, FiUsers, FiSettings } from 'react-icons/fi';

import { useSidebar } from 'layout/Sidebar/context';
import { useSettings } from 'layout/Settings/context';

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import { CSSTransition } from 'react-transition-group';

// Define prop types for ListItem
interface ListItemProps {
  children: React.ReactNode;
  icon: React.ReactElement;
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
  <li className="mb-6 inline-flex items-center px-8">
    <div className="mr-3 flex h-[1.40em] w-[1.40em] items-center">
      {React.cloneElement(icon, { className: 'fill text-midnight-800 dark:text-midnight-200' })}
    </div>
    {children}
  </li>
);


const DropDown = ({ title, items, icon, className, isSettings }: DropDownProps) => {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLUListElement>(null);
  const { collapsedItems, toggleItemCollapse } = useSidebar();
  const isCollapsed = collapsedItems[title];
  const { settings } = useSettings();

  useEffect(() => {
    if (isCollapsed && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isCollapsed]);

  return (
    <div className={`border-b border-b-[#293345] ${className} ${isSettings ? 'py-[0px]' : ''}`}>
      <div className={`flex cursor-pointer items-center h-[60px] px-8 ${isSettings && 'border-t border-t-[#293345] bg-midnight-100 dark:bg-midnight-800'}`} onClick={() => toggleItemCollapse(title)}>
        <div className="mr-3 h-[1.40em] w-[1.40em]">
          {React.cloneElement(icon, { className: 'fill text-midnight-800 dark:text-midnight-200' })}
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
          className={concat(
            'overflow-hidden transition-max-height duration-200 ease-in-out',
            settings.animations ? 'transition-none' : 'transition-translate duration-500',
            isSettings ? 'bg-midnight-100 dark:bg-midnight-800 flex' : undefined
          )}
          style={{ maxHeight: `${contentHeight}px` }}
        >
          {items.map((item, key) => (
            <li className="my-1 px-8 py-0.5 last:pb-4" key={key}>
              {item}
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  )
};

const BackdropHandler = () => {
  const { isSidebarVisible, toggleSidebar } = useSidebar();

  return (
    <CSSTransition
      in={isSidebarVisible}
      timeout={300}
      classNames="backdrop"
      unmountOnExit
    >
      <div
        onClick={toggleSidebar}
        className="fixed inset-0 z-10 lg:backdrop-blur-md lg:bg-midnight-900"
      />
    </CSSTransition>
  );
}

// SideBar Component
const SideBar = () => {
  const { isSidebarVisible } = useSidebar();

  // Inside your Sidebar component
  const { settings, setSetting } = useSettings();

  return (
    <>
      <BackdropHandler />
      <div id="sidebar" className={concat(
        'h-screen',
        'fixed top-0 z-20',
        'overflow-y-scroll',
        'z-10 translate-x-[-100%]',
        'text-midnight-800 dark:text-midnight-400',
        'border-r border-[#293345]',
        'flex flex-col justify-start', 'bg-midnight-100 dark:bg-midnight-900',
        settings.animations ? 'transition-none' : 'transition-translate duration-500',
        isSidebarVisible ? 'translate-x-[0%]' : 'translate-x-[-100%]', 'w-[30%] lg:w-[80%] md:w-[100%] min-w-[300px] text-sm')}>

        <div className='py-[4em]'></div>
        <ul className="flex flex-grow flex-col justify-between">
          <ListItem icon={<FiHome />}><a href="#Home">Home</a></ListItem>
          <ListItem icon={<FiUser />}><a href="#About">About</a></ListItem>
          <ListItem icon={<FiTool />}><a href="#Skills">Skills</a></ListItem>
          <DropDown
            icon={<FiPaperclip />}
            title="Projects"
            items={["kyza.dev", "indexr", "pomodoro", 'instruct.nvim']}
          />
          <DropDown
            icon={<FiMessageSquare />}
            title="Contact"
            items={[
              <div key="email" className="flex w-full justify-between">
                Email: <a href="mailto:contact@kyza.dev">contact@kyza.dev</a>
              </div>,
              // <div key="phone" className="flex w-full justify-between">
              //   Phone: <span>+1 (772) 456-7890</span>
              // </div>,
            ]}
          />
          <DropDown
            title="Socials"
            icon={<FiUsers />}
            items={[
              <div key="github" className="flex w-full justify-between">
                Github: <a href="https://github.com/kyza0d/">github.com/kyza0d/</a>
              </div>,
              <div key="email" className="flex w-full justify-between">
                Instagram: <a href="https://instagram.com/kyza0d/">instagram.com/kyza0d/</a>
              </div>,
              <div key="linkedin" className="flex w-full justify-between">
                Linkedin: <a href='https://linkedin.com/in/kyza0d/'>linkedin.com/in/kyza0d/</a>
              </div>,
            ]}
          />

          <div className="mt-auto" />

          {/* Site Settings */}
          <DropDown
            title="Settings"
            isSettings={true}
            items={[
              <div className='space-x-4 py-6 min-h-[85px]'>
                <div className="inline-flex items-center space-x-2">
                  <Switch checked={!settings.gradient} onCheckedChange={() => setSetting('gradient', !settings.gradient)} />
                  <Label htmlFor="gradient">Gradient</Label>
                </div>

                <div className="inline-flex items-center space-x-2">
                  <Switch checked={!settings.animations} onCheckedChange={() => setSetting('animations', !settings.animations)} />
                  <Label htmlFor="animations">Animations</Label>
                </div>
              </div>
            ]}
            className={concat("sticky bottom-0 left-0 mt-auto border-b-0", "h-fit w-full")}
            icon={<FiSettings />}
          />
        </ul >
      </div >
    </>
  );
};

export default SideBar;
