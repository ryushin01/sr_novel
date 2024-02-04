import { useState } from 'react';
import Router from './Router';
import ThemeSwitch from '@components/ThemeSwitch/ThemeSwitch';
import '@scss/base/common.scss';

const App = () => {
  const [isThemeChange, setIsThemeChange] = useState(true);
  const themeChange = () => {
    setIsThemeChange(!isThemeChange);
  };

  return (
    <div className={`${isThemeChange ? 'light' : 'dark'}`}>
      <ThemeSwitch themeChange={themeChange} isThemeChange={isThemeChange} />
      <Router />
    </div>
  );
};

export default App;
