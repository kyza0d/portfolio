"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';

/**
 * Type definition for the Sidebar context.
 */
type SidebarContextType = {
  isSidebarVisible: boolean;
  showSettings: boolean;
  toggleSidebar: () => void;
  animateSettings: () => void;
  collapsedItems: Record<string, boolean>;
  toggleItemCollapse: (itemId: string) => void;
  openItemCollapse: (itemId: string) => void;
};

/**
 * Initialize Sidebar context with default values.
 */
const SidebarContext = createContext<SidebarContextType>(null!);

/**
 * Custom hook to use the Sidebar context.
 * @returns The Sidebar context value.
 */
export const useSidebar = () => useContext(SidebarContext);

/**
 * Provides the Sidebar context to its children.
 * @param {ReactNode} children - The children components.
 */
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [collapsedItems, setCollapsedItems] = useState<Record<string, boolean>>({});

  const toggleSidebar = () => setSidebarVisible(v => !v);

  const animateSettings = () => {
    setSidebarVisible(true);
    setCollapsedItems(items => ({ ...items, settings: !items.settings }));
    setTimeout(() => openItemCollapse('Settings'), 300)
  };

  const toggleItemCollapse = (itemId: string) => setCollapsedItems(items => ({ ...items, [itemId]: !items[itemId] }));
  const openItemCollapse = (itemId: string) => setCollapsedItems(items => ({ ...items, [itemId]: true }));

  return (
    <SidebarContext.Provider value={{
      isSidebarVisible,
      showSettings,
      collapsedItems,
      toggleSidebar,
      animateSettings,
      openItemCollapse,
      toggleItemCollapse
    }}>
      {children}
    </SidebarContext.Provider>
  );
};
