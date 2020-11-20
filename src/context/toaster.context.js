import React, { useState } from 'react';
import { Toaster } from 'components';
const ToasterContext = React.createContext();

const TOASTER_TIME = 2500;

export const ToasterProvider = ({ children }) => {
  const [visibleToaster, setVisibleToaster] = useState(false);
  const [message, setMessage] = useState(null);

  const showToaster = (message) => {
    setMessage(message);
    setVisibleToaster(true);
    setTimeout(() => {
      setVisibleToaster(false);
      setMessage(null);
    }, TOASTER_TIME);
  };
  return (
    <ToasterContext.Provider value={{ showToaster }}>
      {visibleToaster && <Toaster message={message} />}
      {children}
    </ToasterContext.Provider>
  );
};

export const useToaster = () => React.useContext(ToasterContext);
