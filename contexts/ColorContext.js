import { useState } from 'react';
import { createContext } from 'react';

export const ColorContext = createContext({});

const ColorProvider = ({ children }) => {
  const [colorPalette, setColorPalette] = useState([]);

  return (
    <ColorContext.Provider value={{ colorPalette, setColorPalette }}>
      {children}
    </ColorContext.Provider>
  );
};
export default ColorProvider;
