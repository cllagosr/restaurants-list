import * as types from "../constants/ActionTypes";
import fetchRestaurants from "../shared/fetchRestaurants";
import { RESTAURANT_TYPES } from "../constants/Restaurants";

export const selectType = (restaurantType = RESTAURANT_TYPES.all) => {
  return {
    type: types.SELECT_TYPE,
    restaurantType,
  };
};

export const requestRestaurants = (restaurantType = RESTAURANT_TYPES.all) => {
  return {
    type: types.REQUEST_RESTAURANTS,
    restaurantType,
  };
};

export const receiveRestaurants = (
  restaurantType = RESTAURANT_TYPES.all,
  items = []
) => {
  return {
    type: types.RECEIVE_RESTAURANTS,
    restaurantType,
    items,
  };
};

export const fetchRestaurantsIfNeeded = (restaurantType) => {
  return (dispatch, getState) => {
    const restaurants = getState().restaurantsByType[restaurantType];
    if (!restaurants) {
      dispatch(requestRestaurants(restaurantType));
      return fetchRestaurants("Berlin", restaurantType).then(
        (fetchedRestaurants) => {
          dispatch(receiveRestaurants(restaurantType, fetchedRestaurants));
        }
      );
    }
  };
};
