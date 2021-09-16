import React from "react";
import {useDispatch, useSelector} from "react-redux";
import "./checkout.styles.scss";
import Title from "../title/title.component";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {removeItem, addItem, clearItem} from "../../redux/cart/cart.actions";
import PayPal from "../paypal/paypalButton.component";
import CheckoutMessage from "../checkoutMessege/checkoutMessage.component";

const CheckoutPage = () => {



const dispatch = useDispatch();
const status = useSelector(state => state.checkoutReducer.status);
const currentCartItems = useSelector(state => state.cartReducer.cartItems);
const itemsCount = currentCartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity, 0)
const totalPrice = currentCartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity * cartItem.price, 0)

    return(
        <div className="checkoutPage">
            <Title title={"Checkout"} />
            {(itemsCount === 0) ? <h1 style={{width: "70%"}}>your cart is empty</h1> : currentCartItems.map(({id, name, price, image, quantity}) => {
                const item = {id, name, price, image, quantity};
                return(
                    <div className="checkoutItem">
                    <div className="imageContainer">
                        <img src={image} alt="item" />
                    </div>
                    <span className="name">{name}</span>
                    <span className="quantity">
                        <NavigateBeforeIcon style={{fontSize: 35}} className="plus" onClick={() => dispatch(removeItem(item))} />
                        <span className="value">{quantity}</span>
                        <NavigateNextIcon style={{fontSize: 35}} className="plus" onClick={() => dispatch(addItem(item))} />
                    </span>
                    <span className="price">{price}$</span>
                    <div className="removeButton" onClick={() => dispatch(clearItem(item))}>&#10005;</div>
                    
                </div>
                    )
                })
            }
        <p>total: {totalPrice}$</p>
        {(itemsCount === 0) ? "" : <PayPal totalPrice={totalPrice}/>}
        
        {
            status !== null && <CheckoutMessage />
        }
        
        </div>
    )
}

export default CheckoutPage;

// return(
//     <div className="checkoutItem" key={id}>
//         <p className="itemInfo">{name}</p>
//         <p className="itemInfo">{price}</p>
//         <div className="itemInfo">
//         <NavigateBeforeIcon style={{fontSize: 30}} className="plus" onClick={() => dispatch(removeItem(item))} />
//         <p >{quantity}</p>
//         <NavigateNextIcon style={{fontSize: 30}} className="plus" onClick={() => dispatch(addItem(item))} />

//         </div>

//         <DeleteForeverIcon onClick={() => dispatch(clearItem(item))} style={{ fontSize: 50}} className="itemInfo delete" />
//     <img className="itemInfo img" src={image} />
//     </div>
//     )