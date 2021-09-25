import { useContext } from 'react';
import { Header, SwitchTheme, Icon } from "./StyledAppHeader";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { ThemeContext } from '../../lib/ContextTheme.js';

export const AppHeader = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  const handleThemeToggle = () =>{
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <Header theme={theme}>
      <h4>Where in the world?</h4>
      <SwitchTheme onClick={handleThemeToggle} theme={theme}>
        <Icon>
          {theme === 'light' ? <FaRegMoon /> : <FaRegSun />}
        </Icon>
        {theme === 'light' ? 'Dark mode' : 'Light Mode'}
      </SwitchTheme>
    </Header>
  );
};
