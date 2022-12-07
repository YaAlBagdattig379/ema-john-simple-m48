import React from 'react';
import { addToDb } from '../../utilities/fakedb';//to mangage localStorage data v-4
import { useEffect } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
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
    useEffect( () =>{//first step to display localStorage to 'UI'
        const storedCart = getStoredCart();
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            console.log(addedProduct)
        } 
    },[])

    // button from event handler products 
    const handleAddToCart = (product) =>{
        // cart push product
        const newCart = [...cart,product]
        // console.log(product)
        setCart(newCart);
        addToDb(product.id); // to mangage localStorage data v-4 
    } 
    // console.log(cart)
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