import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { Button } from "../components/";

import { addPizzaToCart, fetchOnePizza } from "../redux/actions";

function Product() {
  const index = document.URL.slice(document.URL.lastIndexOf("/") + 1);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchOnePizza(index));
  }, [dispatch, index]);

  const state = useSelector((state) => state.items[0]);

  const [activeType, setActiveType] = React.useState(state.types[0]);
  const [activeSize, setActiveSize] = React.useState(state.sizes[0]);

  const onSelectType = (id) => {
    setActiveType(state.types[id]);
  };

  const onSelectSize = (id) => {
    setActiveSize(state.sizes[id]);
  };

  const onAddPizzaToCart = (selectPizza) => {
    dispatch(addPizzaToCart(selectPizza));
  };

  const onClickButtonAddPizza = () => {
    onAddPizzaToCart({
      id: state.name + "_" + activeType + "_" + activeSize,
      count: 1,
      name: state.name,
      imageUrl: state.imageUrl,
      price: state.price,
      type: activeType,
      size: activeSize,
    });
  };

  return (
    <div className="container">
      <div className="product-block">
        <div className="product-block__left">
          <img
            className="pizza-block__image"
            src={state.imageUrl}
            alt="Pizza"
          />
        </div>
        <div className="product-block__right">
          <h2 className="product-block__title">{state.name}</h2>
          <div className="product-block__rating">
            <div className="product-block__rating-svg">
              <svg width="20px" height="20px">
                <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855 l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z" />
              </svg>
            </div>
            <div className="product-block__rating-text">{state.rating}</div>
          </div>
          <div className="product-block__line"></div>
          <div className="product-block__price">{state.price} руб.</div>
          <div className="product-block__selector">
            <ul>
              {state.types.map((type, id) => (
                <li
                  key={type}
                  onClick={() => {
                    onSelectType(id);
                  }}
                  className={classNames({
                    active: activeType === state.types[id],
                    disabled: !state.types.includes(type),
                  })}
                >
                  {type}
                </li>
              ))}
            </ul>
            <ul>
              {state.sizes.map((size, id) => (
                <li
                  key={size}
                  onClick={() => {
                    onSelectSize(id);
                  }}
                  className={classNames({
                    active: activeSize === state.sizes[id],
                    disabled: !state.sizes.includes(size),
                  })}
                >
                  {size} см.
                </li>
              ))}
            </ul>
          </div>
          <div className="product-block__button">
            <Button
              onClick={onClickButtonAddPizza}
              className="button button--outline button--add"
            >
              <span className="buttonAddSpan">Добавить в корзину</span>
            </Button>
          </div>
          <div className="product-block__line"></div>
          <div className="product-block__text">описание</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
