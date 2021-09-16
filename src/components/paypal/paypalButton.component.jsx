import React from "react";
import ReactDOM from "react-dom";
import "./paypal.styles.scss";
import { useDispatch } from "react-redux";
import {getStatus} from "../../redux/checkout/checkout.actions";
import { clearCart } from "../../redux/cart/cart.actions";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


function PayPal({totalPrice}) {
  var stringedPrice = totalPrice.toString();
  
  const dispatch = useDispatch();
  
  //sb-oehyz7279324_api1.business.example.com
  //,O8biE)A
  //DPWPSD4UB238ESH8

  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: stringedPrice,
          },
          description: 'The payment transaction description.'
        },
      ],
    });
  };
  
  const onApprove = (data, actions) => {
    dispatch(getStatus("paid"));
    dispatch(clearCart());
    return actions.order.capture();
  };

  const onError = (err) => {
    dispatch(getStatus("error"))
    console.log(err);
  }
  

  return (
    <div className="paypal">
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
      onError={(err) => onError(err)}
    />
    </div>
  );
}

export default PayPal;


