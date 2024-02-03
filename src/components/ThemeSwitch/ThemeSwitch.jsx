import './ThemeSwitch.scss';

const ThemeSwitch = ({ isThemeChange, themeChange }) => {
  return (
    <div className="themeContainer">
      <button
        className={`${isThemeChange ? 'light' : 'dark'}`}
        onClick={themeChange}
      ></button>
    </div>
  );
};

export default ThemeSwitch;
