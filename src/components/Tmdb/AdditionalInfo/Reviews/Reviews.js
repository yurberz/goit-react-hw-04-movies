import styled from "styled-components";

const Ul = styled.ul`
  .list:not(:last-child) {
    margin-bottom: 15px;
  }

  .p {
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

const Reviews = (props) => {
  const { infoArr } = props;

  return (
    <>
      {infoArr.length > 0 ? (
        <Ul>
          {infoArr.map((review) => (
            <li className="list" key={review.id}>
              <p className="p">Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </Ul>
      ) : (
        <p> We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
