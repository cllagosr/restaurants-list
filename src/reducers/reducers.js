import { combineReducers } from "redux";
import {
  RECEIVE_RESTAURANTS,
  REQUEST_RESTAURANTS,
  SELECT_TYPE,
} from "../constants/ActionTypes";
import { RESTAURANT_TYPES } from "../constants/Restaurants";

const selectedType = (state = RESTAURANT_TYPES.all, action) => {
  switch (action.type) {
    case SELECT_TYPE:
      return action.restaurantType;
    default:
      return state;
  }
};

const restaurants = (
  state = {
    isFetching: false,
    items: [],
  },
  action
) => {
  switch (action.type) {
    case REQUEST_RESTAURANTS:
      return { ...state, isFetching: true };
    case RECEIVE_RESTAURANTS:
      return {
        ...state,
        isFetching: false,
        items: action.items,
      };
    default:
      return state;
  }
};

const restaurantsByType = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_RESTAURANTS:
    case RECEIVE_RESTAURANTS:
      return {
        ...state,
        [action.restaurantType]: restaurants(
          state[action.restaurantType],
          action
        ),
      };
    default:
      return state;
  }
};

export default combineReducers({
  restaurantsByType,
  selectedType,
});
