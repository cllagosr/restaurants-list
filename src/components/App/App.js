import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../assets/styles/theme";
import RestaurantsList from "../RestaurantsList/RestaurantsList";
import Select from "../Select/Select";
import * as S from "./app.styled";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.Wrapper>
        <S.AppTitle>Top restaurants by Yelp</S.AppTitle>
        <Select
          onChange={() => {}}
          options={[
            { text: "All restaurants", value: "restaurants" },
            { text: "Sushi", value: "sushi" },
            { text: "Pizza", value: "pizza" },
            { text: "Burger", value: "burger" },
          ]}
        />
        <S.App>
          <RestaurantsList
            restaurants={[
              {
                id: 1,
                name: "Burgermeister",
                imageUrl:
                  "https://s3-media2.fl.yelpcdn.com/bphoto/vTFl0gydeE1PyNIrYP1lmA/o.jpg",
                body: "Mehringdamm 32, 10961",
              },
              {
                id: 2,
                name: "Rausch Schokoladenhaus",
                imageUrl:
                  "https://s3-media2.fl.yelpcdn.com/bphoto/eYrjJ1s8KXHeB1rR2ROSzg/o.jpg",
                body: "Mehringdamm 32, 10961",
              },
            ]}
          />
        </S.App>
      </S.Wrapper>
    </ThemeProvider>
  );
};

export default App;
