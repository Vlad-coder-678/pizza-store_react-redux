import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function PizzaBlock(pizza) {
  const minPrice = pizza.price;
  return (
    <div className="pizza-block">
      <Link to={`/product/${pizza.id}`}>
        <img className="pizza-block__image" src={pizza.imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{pizza.name}</h4>
      </Link>
      <div className="pizza-block__bottom">
        <div className="pizza-block__rating">
          <div className="pizza-block__rating-svg">
            <svg width="20px" height="20px">
              <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855 l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z" />
            </svg>
          </div>
          <div className="pizza-block__rating-text">{pizza.rating}</div>
        </div>
        <div className="pizza-block__price">от {minPrice} руб.</div>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

PizzaBlock.defaultProps = {
  name: "",
  imageUrl: "",
  price: 0,
  types: [],
  sizes: [],
};

export default PizzaBlock;
