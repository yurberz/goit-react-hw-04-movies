import { NavLink } from "react-router-dom";
import { routesPages } from "../../../routes/routes";
import styled from "styled-components";

const Nav = styled.nav`
  ul {
    display: flex;
  }

  .list:not(:last-child) {
    margin-right: 20px;
  }

  .link {
    color: springgreen;
  }

  .active {
    color: salmon;
  }
`;

const NavList = styled(NavLink)`
  font-size: 32px;
`;

const Navigation = () => {
  return (
    <Nav>
      <ul>
        {routesPages.map(({ path, name, exact }) => (
          <li className="list" key={path}>
            <NavList
              to={{ pathname: path }}
              exact={exact}
              className="link"
              activeClassName="active"
            >
              {name}
            </NavList>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default Navigation;
