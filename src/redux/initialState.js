const initialState = {
  category: null,
  activeSortIndex: 0,
  items: [],
  isLoaded: false,
  categoryNames: ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"],
  sortItems: [
    "популярности",
    "цене. по возрастанию",
    "цене. по убыванию",
    "алфавиту A-Я",
    "алфавиту Я-A",
  ],
  cartItems: {
    selectedPizzas: [],
    totalPrice: 0,
    totalCount: 0,
  },
};

export default initialState;
