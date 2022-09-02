import React, { useState, useEffect } from 'react';
import CardProd from '../itemListContainer/cardProd';

const ProductList = () => {
    const [product, setProduct] = useState ([]);

    const fetchData = async () => {
         
const res = await  fetch('https://fakestoreapi.com/products?limit=3');
     const data = await res.json();
     return data;  
    }
    useEffect (() => {
   fetchData().then((data) => setProduct(data));

   setTimeout(() => {
    fetchData();
}, 2000);

    },[] );
  
    return (
        <div>
            {product.map(prod => (
             <CardProd response={prod} />
            
            ))}
        </div>
    );
};

export default ProductList;