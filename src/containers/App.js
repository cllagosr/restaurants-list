import { connect } from "react-redux";
import { fetchRestaurantsIfNeeded, selectType } from "../actions/actions";
import App from "../components/App/App";

const mapStateToProps = (state) => {
  const { selectedType, restaurantsByType } = state;
  const { isFetching, items } = restaurantsByType[selectedType] || {
    isFetching: true,
    items: [],
  };

  return {
    selectedType,
    items,
    isFetching,
  };
};

export default connect(mapStateToProps, {
  fetchRestaurantsIfNeeded,
  selectType,
})(App);
