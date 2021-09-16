import React, {useState} from "react";
import "./contact.styles.scss";
import emailjs from 'emailjs-com';

const Contact = () => {

    const [msgStatus, setMsgStatus] = useState("");
    const [color, setColor] = useState("");

    function msg(status){
        if(status === "success"){
            setColor("rgb(208, 240, 197)");
            setMsgStatus("message sent");
        }
        if(status === "error"){
            setColor("rgb(207, 45, 33)")
            setMsgStatus("we had an error, please try contact me on instagram/facebook")
        }
        if(status === ""){
            setMsgStatus("")
        }
    }

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_gvwxlbq', 'template_80ydtq7', e.target, 'user_712wz7VFMDZuSlw9mncLb')
          .then((result) => {
              console.log(result.text);
              msg("success")
          }, (error) => {
              console.log(error.text);
              msg("error")
          });
          e.target.reset();
      }


    return(
        <div className="contact">
            <div className="contactContainer">
            <p className="contactme">contact me</p>

            <form className="contact-form" onSubmit={sendEmail}>
            <div className="inputs">
            <input style={{marginRight: "0.8vw"}} className="input" type="text" name="name" placeholder="Name" required />
            <input style={{marginLeft: "0.8vw"}} className="input" type="email" name="email" placeholder="Email" required />
            </div>
            <textarea className="textarea" name="message" placeholder="Message" required />
            <input className="submit" type="submit" value="Send" />
            <p style={{color: color}}>{msgStatus}</p>
            </form>
            </div>
            <div className="contactBackground" />
        </div>
        
    )
}

export default Contact;