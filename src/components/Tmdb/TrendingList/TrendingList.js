import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  .list:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const List = styled(Link)`
  color: honeydew;
  font-size: 18px;
`;

const TrendingMovies = ({ trandingList }) => {
  return (
    <Ul>
      {trandingList.map((item) => (
        <li className="list" key={item.id}>
          <List to={`/movies/${item.id}`}>{item.title}</List>
        </li>
      ))}
    </Ul>
  );
};

export default TrendingMovies;
