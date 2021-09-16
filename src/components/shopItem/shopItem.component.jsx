import React from "react";
import "./shopItem.styles.scss";
import {useDispatch} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";
import { useHistory } from "react-router";

const ShopItem = ({id, name, image, price}) => {
    const dispatch = useDispatch();
    const item = {id, name, image, price};

    const history = useHistory();

    function goToProduct(){
        window.scrollTo({top: 0, behavior: 'smooth'});
        history.push(`/shop/${name}`)
    }

    return(
    <div className="shopItem" key={id}>
            <div className="itemImage" onClick={() => goToProduct()} style={{backgroundImage: `url(${image})`}} />
            <p className="name" onClick={() => goToProduct()}>{name}</p>
            <p className="price">{price}$</p>
            <button onClick={() => dispatch(addItem(item))} className="addButton">ADD TO CART</button>
    </div>
    )
}

export default ShopItem;