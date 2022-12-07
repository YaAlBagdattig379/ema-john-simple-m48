import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])//first stats for container cart
     // stats for container cartContainer 
     const [cart, setCart] = useState([]);//second stats for container cart
    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // button from event handler products 
    const handleAddToCart = (product) =>{
        // cart push product
        const newCart = [...cart,product]
        // console.log(product)
        setCart(newCart);
    } 
    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product => <Product 
                    key={product.id}
                    product ={product}
                    handleAddToCart={handleAddToCart} //button eventHandler 
                    ></Product>)
               }
            </div>
            <div className="cart-container"> {/* button eventHandler */}
               {/* all cart details are set to Cart file */}
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;