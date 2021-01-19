import * as aT from "./actionType";
import initialState from "./initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case aT.SET_LOADED:
      return { ...state, isLoaded: action.payload };
    case aT.SET_PIZZAS:
      return { ...state, items: action.payload, isLoaded: true };
    case aT.SET_SORT_BY:
      return { ...state, activeSortIndex: action.payload };
    case aT.SET_CATEGORY:
      return { ...state, category: action.payload };
    case aT.SET_COUNT:
      state.cartItems.selectedPizzas[action.payload.indexItem].count =
        action.payload.count;
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          selectedPizzas: [...state.cartItems.selectedPizzas],
        },
      };
    case aT.SET_TOTAL_PRICE:
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          totalPrice: action.payload,
        },
      };
    case aT.SET_TOTAL_COUNT:
      return {
        ...state,
        cartItems: { ...state.cartItems, totalCount: action.payload },
      };
    case aT.ADD_PIZZA_TO_CART:
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          selectedPizzas: state.cartItems.selectedPizzas.some(
            (pizza) => pizza.id === action.payload.id
          )
            ? [...state.cartItems.selectedPizzas]
            : [...state.cartItems.selectedPizzas, action.payload],
        },
      };
    case aT.ON_CLEAR_CART:
      return {
        ...state,
        cartItems: {
          selectedPizzas: [],
          totalPrice: 0,
          totalCount: 0,
        },
      };
    case aT.ON_REMOVE_PIZZA:
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          selectedPizzas: state.cartItems.selectedPizzas.filter(
            (pizza) => pizza.id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
