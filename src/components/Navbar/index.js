import { NavBarWrapper } from "./StyledComponents";
import { FaHome } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from "react-router-dom";
import Avatar from "components/Avatar";

const routeInfo = [
  { name: "Home", route: "/home", icon: <FaHome className="route_icon" /> },
  {
    name: "Product",
    route: "/product",
    icon: <CgDetailsMore className="route_icon" />,
  },
];

const NavBar = (props) => {
  const { toggleNavbarShow, navStyle } = props;

  return (
    <NavBarWrapper style={{ ...navStyle }}>
      <Avatar className="avatar" />
      {routeInfo.map((route) => (
        <Link
          key={route.name}
          to={route.route}
          className="single_route"
          onClick={toggleNavbarShow}>
          {route.icon}
          <p className="route_name">{route.name}</p>
        </Link>
      ))}
    </NavBarWrapper>
  );
};

export default NavBar;
