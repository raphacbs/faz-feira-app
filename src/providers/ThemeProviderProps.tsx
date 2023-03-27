import React from 'react';
import {myTheme} from '../theme';
import {ThemeContext} from '../ThemeContext';

interface ThemeProviderProps {
  theme: typeof myTheme;
}

export const ThemeProvider: React.FC = ({theme, children}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
