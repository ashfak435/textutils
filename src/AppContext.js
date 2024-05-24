import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create a context provider component
export const AppProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleHandler = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121a38';
      showAlert("Dark mode enabled", "success");
      document.title = 'TextUtils - Dark';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = 'TextUtils - Home';
    }
  };

  return (
    <AppContext.Provider value={{ mode, alert, showAlert, toggleHandler }}>
      {children}
    </AppContext.Provider>
  );
};