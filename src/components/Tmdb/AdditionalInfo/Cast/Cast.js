import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    max-width: 150px;
  }

  .list {
    margin-bottom: 10px;
    margin-right: 10px;
    text-align: center;
  }
`;

const Cast = (props) => {
  const { infoArr } = props;

  return (
    <Ul>
      {infoArr.map(
        (item) =>
          item.profile_path && (
            <li className="list" key={item.credit_id}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`}
                alt={item.name}
                width="150"
              />
              <p>{item.name}</p>
            </li>
          )
      )}
    </Ul>
  );
};

export default Cast;
