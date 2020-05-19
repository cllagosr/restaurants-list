import React from "react";
import PropTypes from "prop-types";
import * as S from "./card.styled";

const Card = ({ title, imageUrl, body }) => {
  return (
    <S.Card>
      <S.Background url={imageUrl} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Body>{body}</S.Body>
      </S.Content>
    </S.Card>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  body: PropTypes.string,
};

Card.defaultProps = {
  body: "",
};

export default Card;
