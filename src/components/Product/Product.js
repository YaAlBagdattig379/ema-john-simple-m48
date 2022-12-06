import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {name, img, seller, price, ratings} = props.product;
    // console.log(img)
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <p className="product-name">{name}</p>
            {/* <h2> product name : {name} </h2> */}
        </div>
    );
};

export default Product;