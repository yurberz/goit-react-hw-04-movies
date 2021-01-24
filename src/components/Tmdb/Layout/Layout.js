import React from "react";
import Appbar from "../Appbar/Appbar";
import styled from "styled-components";

const Div = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;
`;

const Layout = ({ children }) => (
  <Div>
    <Appbar />
    {children}
  </Div>
);

export default Layout;
