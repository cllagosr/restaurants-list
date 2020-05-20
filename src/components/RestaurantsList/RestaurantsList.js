import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";

const RestaurantsList = ({ restaurants }) => {
  return restaurants.map((restaurant) => {
    return (
      <Card
        key={restaurant.id}
        title={restaurant.name}
        imageUrl={restaurant.imageUrl}
        body={restaurant.address}
      />
    );
  });
};

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

export default RestaurantsList;
