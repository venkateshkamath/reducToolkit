import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { useDispatch } from 'react-redux';
import { removeItems, decrease, increase } from '../features/cart/cartSlice';
const CartItem = ({id, title, img, price, amount}) => {
    const dispatch = useDispatch();
  return (
    <article className='cart-item'>
     <img src={img} alt={title} />
     <div>
         <h4>{title}</h4>
         <h4 className="item-price">${price}</h4>
         <button className="remove-btn" onClick={()=>dispatch(removeItems(id))}>
             Remove
         </button>
     </div>
    <div><button className='amount-btn' onClick = {()=>dispatch(increase(id))}>
        <ChevronUp/>
        </button>
        <p className="amount">
            {amount}
        </p>
        <button className='amount-btn' onClick={()=>dispatch(decrease({id}))}>
        <ChevronDown/>
        </button>
        </div>
    </article>
  )
}

export default CartItem