import { Header, SwitchTheme, Icon } from "./StyledAppHeader";
import { FaRegSun } from "react-icons/fa";

export const AppHeader = () => {
  return (
    <Header>
      <h4>Where in the world?</h4>
      <SwitchTheme>
        <Icon>
          <FaRegSun />
        </Icon>
        Light Mode
      </SwitchTheme>
    </Header>
  );
};
