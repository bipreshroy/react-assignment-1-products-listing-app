/*eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';

export default function Product(props) {
  const { title, description, price, rating, image } = props.product;
  return (
    <article className="product">
      <img src={image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className="product__price">{price}</p>
        <p className="product__rating">{rating.rate}/5</p>
        <p className="product__desc">{description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number
    }),
    image: PropTypes.string
  })
};
