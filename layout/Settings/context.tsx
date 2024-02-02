"use client"

import React, { ReactNode, createContext, useContext, useState } from 'react';

const defaultSettings = {
  gradient: false,
  animations: false,
  // add other default settings here
};

const SettingsContext = createContext({
  settings: defaultSettings,
  setSetting: (name: string, value: any) => { },
});

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState(defaultSettings);

  const setSetting = (name: string, value: any) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, setSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
