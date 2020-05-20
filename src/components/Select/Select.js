import React from "react";
import PropTypes from "prop-types";
import * as S from "./select.styled";

const Select = ({ onChange, options }) => {
  return (
    <S.Select name={"type"} onChange={onChange} data-testid="select">
      {options.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        );
      })}
    </S.Select>
  );
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default Select;
