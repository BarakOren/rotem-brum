import React from "react";
import "./shop.styles.scss";
// import ShopItem from "../shopItem/shopItem.component";
import Contact from "../contact/contact.component";
import Title from "../title/title.component";
// import {useDispatch, useSelector} from "react-redux";
// import { useHistory } from "react-router";

const Shop = () => {
// const dispatch = useDispatch();

// const shopData = useSelector(state => state.shopReducer.shopData);
// const currentCartItems = useSelector(state => state.cartReducer.cartItems);
// const itemsCount = currentCartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity, 0)

// const history = useHistory();

// function goToCheckout(){
//     window.scrollTo({top: 0, behavior: 'smooth'});
//     history.push("/shop/checkout")
// }

    return(
        <div className="shop">
             <Title title={"Shop"} />
             <h1 className="shopwillbe">Shop Will Be Up Soon</h1>
           {/* <div className="itemsContainer">
            {shopData.map(({id, name, image, price}) => (
                <ShopItem id={id} name={name} image={image} price={price} />
            ))}
            </div>    
            
            <div className="checkoutDiv" onClick={() => goToCheckout()}>
                <div className="checkoutIcon"> 
                    <div>
                    <p style={{margin: "0"}}>checkout ({itemsCount})</p>
                    </div> 
                </div>
            </div> */}
            <Contact />
        </div>
    )
}

export default Shop;