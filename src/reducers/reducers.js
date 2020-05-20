import { combineReducers } from "redux";
import {
  RECEIVE_RESTAURANTS,
  REQUEST_RESTAURANTS,
  SELECT_TYPE,
  SET_ERROR_RESTAURANTS,
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
    failed: false,
    isFetching: false,
    items: [],
  },
  action
) => {
  switch (action.type) {
    case SET_ERROR_RESTAURANTS:
      return { ...state, failed: true, isFetching: false };
    case REQUEST_RESTAURANTS:
      return { ...state, failed: false, isFetching: true };
    case RECEIVE_RESTAURANTS:
      return {
        ...state,
        isFetching: false,
        items: action.items,
        failed: false,
      };
    default:
      return state;
  }
};

const restaurantsByType = (state = {}, action) => {
  switch (action.type) {
    case SET_ERROR_RESTAURANTS:
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
