import React from 'react'; // working from-49-v-1

const Cart = (props) => {
    return (
        <div>
          <h4>order summery</h4>
          <p>Selected Items: {props.cart.length} </p>
        </div>
    );
};

export default Cart;