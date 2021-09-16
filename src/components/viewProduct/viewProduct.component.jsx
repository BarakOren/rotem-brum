import React from "react";
import "./viewProduct.styles.scss";
import {useSelector} from "react-redux";
import Title from "../title/title.component";
import { useRouteMatch } from "react-router";

const ViewProduct = () => {
    const shopData = useSelector(state => state.shopReducer.shopData);
    const selectedProductName = useRouteMatch().params.product;
    const selectedProduct = shopData.find(p => p.name === selectedProductName);
    
    return (
        <div className="viewProduct">
            <Title title={selectedProduct.name} />
            <img className="mainImage" src={selectedProduct.image} alt="main"/>
            <p className="productInfo">{selectedProduct.info}</p>
            <div className="productImagesContainer">
            {selectedProduct.images.map(img => (
                <img className="subImages" src={img} alt="images" />
            ))}
            </div>
        </div>
    )
}

export default ViewProduct;