import Navigation from "../Navigation/Navigation";
import styled from "styled-components";

const Header = styled.header`
  padding: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid black;
`;

const Appbar = () => (
  <Header>
    <Navigation />
  </Header>
);

export default Appbar;
