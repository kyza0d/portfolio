"use client"

import React, { createContext, useState, useContext } from 'react';

interface SettingsContextProps {
  backdropEnabled: boolean;
  toggleBackdrop: () => void;
  reduceMotionEnabled: boolean;
  toggleReduceMotion: () => void;
}

const SettingsContext = createContext<SettingsContextProps>({
  backdropEnabled: true,
  toggleBackdrop: () => { },
  reduceMotionEnabled: false,
  toggleReduceMotion: () => { },
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [backdropEnabled, setBackdropEnabled] = useState(true);
  const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false);

  const toggleBackdrop = () => setBackdropEnabled(prevState => !prevState);
  const toggleReduceMotion = () => setReduceMotionEnabled(prevState => !prevState);

  return (
    <SettingsContext.Provider value={{ backdropEnabled, toggleBackdrop, reduceMotionEnabled, toggleReduceMotion }}>
      {children}
    </SettingsContext.Provider>
  );
};
