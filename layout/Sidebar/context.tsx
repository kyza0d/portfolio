"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';

const header = ""

/**
 * Type definition for the Sidebar context.
 */
type SidebarContextType = {
  isSidebarVisible: boolean;
  showSettings: boolean;
  toggleSidebar: () => void;
  toggleSettings: () => void;
  collapsedItems: Record<string, boolean>;
  toggleItemCollapse: (itemId: string) => void;
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
  const toggleSettings = () => {
    setSidebarVisible(true);
    setShowSettings(v => !v);
  };
  const toggleItemCollapse = (itemId: string) =>
    setCollapsedItems(items => ({ ...items, [itemId]: !items[itemId] }));

  return (
    <SidebarContext.Provider value={{
      isSidebarVisible,
      showSettings,
      collapsedItems,
      toggleSidebar,
      toggleSettings,
      toggleItemCollapse
    }}>
      {children}
    </SidebarContext.Provider>
  );
};
