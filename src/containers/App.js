import { connect } from "react-redux";
import { fetchRestaurantsIfNeeded, selectType } from "../actions/actions";
import App from "../components/App/App";

const mapStateToProps = (state) => {
  const { selectedType, restaurantsByType } = state;
  const { isFetching, items, failed } = restaurantsByType[selectedType] || {
    isFetching: true,
    failed: false,
    items: [],
  };

  return {
    selectedType,
    items,
    failed,
    isFetching,
  };
};

export default connect(mapStateToProps, {
  fetchRestaurantsIfNeeded,
  selectType,
})(App);
