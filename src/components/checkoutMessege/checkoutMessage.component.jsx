import React from "react";
import "./checkoutMessage.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getStatus } from "../../redux/checkout/checkout.actions";

const CheckoutMessage = () => {
      const status = useSelector(state => state.checkoutReducer.status);
      const dispatch = useDispatch();
      function message(){
          if(status === "paid"){
              return "PAYMENT RECIVED! Thank You For Purchasing!"
          }
          if(status === "error"){
            return "there is a problem, please contact me!"
        }
      }

    return(
    <div className="checkoutMessege">

        {
        status === "paid" && <div className="messageContainer">
            <div onClick={() => dispatch(getStatus(null))} className="x">&#10005;</div>
            <div className="message">
            <p>{message()}</p>
            </div>
        </div>
        }
    </div>
    )
}

export default CheckoutMessage;