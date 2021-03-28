import Logo from "../../app/atoms/Logo/logo.atom";
import { HeaderStyle } from "./header.styles";

function Header() {
  return (
    <HeaderStyle>
      <Logo />
    </HeaderStyle>
  );
}

export default Header;
