"use client"

import React from 'react';
import { useSettings } from '@/layout/Settings/context';

const DebugContext = () => {
  const contextValues = useSettings()

  return (
    <div className='fixed bottom-0 right-0 m-5 rounded-md bg-slate-800 p-5 text-white'>
      <h4>Context Values</h4>
      <pre>{JSON.stringify(contextValues, null, 2)}</pre>
    </div>
  );
};

export default DebugContext;
