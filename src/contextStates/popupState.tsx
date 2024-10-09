import { createContext, ReactNode, useState } from "react";

export interface ComponentOneContextType {
  isPopupOpen: boolean;
  setIsPopupOpen: (isPopupOpne: boolean) => void;
  quoteReply: any[];
  setQuoteReply: (quoteReply: any) => void;
  isQuoteOpen: boolean;
  setIsQuoteOpen: (isQuoteOpen: boolean) => void;
};


interface ComponentOneProviderProps {
  children: ReactNode;
}
export const PopupContext = createContext<ComponentOneContextType | undefined>(undefined);
export const PopupProvider: React.FC<ComponentOneProviderProps> = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [quoteReply, setQuoteReply] = useState([]);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <PopupContext.Provider
      value={{
        isPopupOpen,
        setIsPopupOpen,
        quoteReply,
        setQuoteReply,
        isQuoteOpen,
        setIsQuoteOpen,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
