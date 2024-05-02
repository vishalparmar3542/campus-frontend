// Product.js

import React from 'react';
import '../styles/Product.css'; // Import the CSS file for product styles

const Product = ({ product }) => {
  const { expireDate, barCodeId, name, description, region, imageUrl, brand, category } = product;

  return (
    <div className="product-card">
      <img className="product-image" src={imageUrl} alt={name} />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p><strong>Brand:</strong> {brand}</p>
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Expire Date:</strong> {expireDate}</p>
        <p><strong>Bar Code ID:</strong> {barCodeId}</p>
      </div>
    </div>
  );
};

export default Product;
