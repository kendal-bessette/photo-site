import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import lightTheme from '../theme/light';
import darkTheme from '../theme/dark';

const ThemeContext = createContext<any>(null);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (theme === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};

export const ThemeProvider: React.FC<any> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  const theme = currentTheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={theme}>
      <StyledThemeProvider theme={theme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
