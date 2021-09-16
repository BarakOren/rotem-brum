import React from "react";
import rotemBrum from "../../assests/rotemBrum.png";
import "./social.styles.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { grey } from '@material-ui/core/colors';

const Social = () => {
    return(
        <div className="social">
            <img className="rotembrumicon" src={rotemBrum} alt="rotem brum" />
            <a className="icon" href="https://www.facebook.com/R.B.Calli" target="_blank" rel="noopener noreferrer">
            <FacebookIcon  style={{ fontSize: 30, color: grey[100] }}/>
            </a>
            <a className="icon" href="https://www.instagram.com/rotembrum/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon  style={{ fontSize: 30, color: grey[100] }} />
            </a>
        </div>
    )
}

export default Social;