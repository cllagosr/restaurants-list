import React, { useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../assets/styles/theme";
import RestaurantsList from "../RestaurantsList/RestaurantsList";
import Select from "../Select/Select";
import { RESTAURANT_TYPES } from "../../constants/Restaurants";
import * as S from "./app.styled";

const App = (props) => {
  useState(() => {
    props.fetchRestaurantsIfNeeded(props.selectedType);
  }, []);

  const onChange = () => {
    props.selectType(event.target.value);
    props.fetchRestaurantsIfNeeded(event.target.value);
  };

  const options = [
    { text: "All restaurants", value: RESTAURANT_TYPES.all },
    { text: "Sushi", value: RESTAURANT_TYPES.sushi },
    { text: "Pizza", value: RESTAURANT_TYPES.pizza },
    { text: "Burger", value: RESTAURANT_TYPES.burger },
  ];

  return (
    <ThemeProvider theme={theme}>
      <S.Wrapper>
        <S.AppTitle>Top restaurants by Yelp</S.AppTitle>
        <Select onChange={onChange} options={options} />
        <S.App>
          {props.isFetching && <h3>Loading...</h3>}
          <RestaurantsList restaurants={props.items} />
        </S.App>
      </S.Wrapper>
    </ThemeProvider>
  );
};

App.propTypes = {
  fetchRestaurantsIfNeeded: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  selectType: PropTypes.func.isRequired,
  selectedType: PropTypes.string.isRequired,
};

export default App;
