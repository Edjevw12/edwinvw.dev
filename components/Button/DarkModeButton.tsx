import React from 'react';
import { useTheme } from 'next-themes';

const DarkModeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  function toggleMode() {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }
  return <button onClick={toggleMode}>TOGGLE DARKMODE</button>;
};

export default DarkModeButton;
