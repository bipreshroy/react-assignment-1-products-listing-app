/*eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

export default function Products(props) {
  const { products } = props;
  const product = products.map((product) => <Product key={product.id} product={product} />);
  return <div className="products">{product}</div>;
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};
