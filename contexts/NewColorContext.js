import { useState } from 'react';
import { createContext } from 'react';

export const NewColorContext = createContext({});

const NewColorProvider = ({ children }) => {
  const [newColorPalette, setNewColorPalette] = useState({});

  return (
    <NewColorContext.Provider value={{ newColorPalette, setNewColorPalette }}>
      {children}
    </NewColorContext.Provider>
  );
};

export default NewColorProvider;
