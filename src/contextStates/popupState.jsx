import { createContext, useState } from "react";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
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
