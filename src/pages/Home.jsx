import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories, SortPopup, PizzaBlock, LoadingBlock } from "../components";
import { setCategory, setSortBy, fetchPizzas } from "../redux/actions";

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  React.useEffect(() => {
    dispatch(fetchPizzas(state.category, state.activeSortIndex));
  }, [dispatch, state.category, state.activeSortIndex]);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  const onSelectSort = (index) => {
    dispatch(setSortBy(index));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={state.category}
          onClickCategory={onSelectCategory}
          categoryNames={state.categoryNames}
        />
        <SortPopup
          activeSortIndex={state.activeSortIndex}
          onClickSortBy={onSelectSort}
          sortItems={state.sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {state.isLoaded ? (
          state.items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
        ) : (
          <LoadingBlock />
        )}
      </div>
    </div>
  );
}

export default Home;
