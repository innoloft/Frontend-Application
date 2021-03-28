import { RouteContainer, SidebarStyle } from "./sidebar.styles";
import { withRouter, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  return (
    <SidebarStyle>
      <span>NAVIGATION</span>
      <RouteContainer to="/" active={location.pathname === "/" ? 1 : 0}>
        DASHBOARD
      </RouteContainer>
      <RouteContainer
        to="/product"
        active={location.pathname === "/product" ? 1 : 0}
      >
        PRODUCT
      </RouteContainer>
    </SidebarStyle>
  );
}

export default withRouter(Sidebar);
