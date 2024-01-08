import React, { useState } from 'react';

interface ToggleProps {
  values: [string, string]; // Array with exactly two string elements
  callback: (value: string) => void;
}

const Toggle: React.FC<ToggleProps> = ({ values, callback }) => {
  if (values.length !== 2) {
    throw new Error("values array must have exactly two elements");
  }

  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    callback(isOn ? values[1] : values[0]);
  };

  return (
    <div className="relative inline-block h-8 w-14 select-none align-middle transition duration-200 ease-in">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className="toggle-checkbox absolute block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 bg-white"
        onClick={toggleSwitch}
      />
      <label
        htmlFor="toggle"
        className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${isOn ? 'bg-blue-500' : ''}`}
        style={{ padding: '3px' }}
      ></label>
    </div>
  );
};

export default Toggle;
