import { createContext, useContext, useState } from "react";


// define the actually context (whats being based down)
interface ComposeContextProps {
  isComposeOpen: boolean;
  setIsComposeOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// exact same as above
export const composeContext = createContext<ComposeContextProps>({
  isComposeOpen: false,
  setIsComposeOpen: () => false,
});

// this is what we wrap the entire component with
export const ComposeContext = ({ children }: { children: any }) => {
  const [isComposeOpen, setIsComposeOpen] = useState<boolean>(false);

  return (
    // must pass down the const value is a value just like props
    <composeContext.Provider value={{ isComposeOpen, setIsComposeOpen }}>
      {children}
    </composeContext.Provider>
  );
};
