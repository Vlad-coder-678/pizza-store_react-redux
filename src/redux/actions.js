import * as axios from "axios";
import * as aT from "./actionType";

export const setLoaded = (isLoaded) => ({
  type: aT.SET_LOADED,
  payload: isLoaded,
});
export const setPizzas = (items) => ({
  type: aT.SET_PIZZAS,
  payload: items,
});
export const setSortBy = (payload) => ({
  type: aT.SET_SORT_BY,
  payload,
});
export const setCategory = (payload) => ({
  type: aT.SET_CATEGORY,
  payload,
});
export const setTotalPrice = (totalPrice) => ({
  type: aT.SET_TOTAL_PRICE,
  payload: totalPrice,
});
export const setTotalCount = (totalCount) => ({
  type: aT.SET_TOTAL_COUNT,
  payload: totalCount,
});
export const setCount = (payload) => ({
  type: aT.SET_COUNT,
  payload,
});
export const addPizzaToCart = (selectedPizza) => ({
  type: aT.ADD_PIZZA_TO_CART,
  payload: selectedPizza,
});
export const onClearCart = () => ({
  type: aT.ON_CLEAR_CART,
});
export const onRemovePizza = (id) => ({
  type: aT.ON_REMOVE_PIZZA,
  payload: id,
});
export const fetchOnePizza = (id) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(`http://localhost:3001/pizzas?id=${id}`).then(({ data }) => {
    dispatch(setPizzas(data));
  });
};
export const fetchPizzas = (category, activeSortIndex) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category != null ? `category=${category}&` : ``
      }_sort=${
        activeSortIndex === 0
          ? `rating&_order=desc`
          : activeSortIndex === 1
          ? `price&_order=asc`
          : activeSortIndex === 2
          ? `price&_order=desc`
          : activeSortIndex === 3
          ? `name&_order=asc`
          : activeSortIndex === 4
          ? `name&_order=desc`
          : ``
      }
`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};
