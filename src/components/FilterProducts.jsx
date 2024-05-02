// Products.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import '../styles/Product.css';
import  {useNavigate} from 'react-router-dom';

const Products = () => {
   const  Navigate=useNavigate()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    var token = localStorage.getItem('token');
    if(!token){
        console.log("token not found")
        Navigate("/")
    }
    token="\""+token+"\""
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://backend-compass.bhanupratap-12212215.workers.dev/v1/products/getProducts', {
          headers: {
            token:token,
          },
        });
        const sortedProducts = response.data.sort((a, b) => {
            return new Date(a.expireDate) - new Date(b.expireDate);
          });
        setProducts(sortedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <h2>Expiry Products</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
