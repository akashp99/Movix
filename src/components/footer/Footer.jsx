import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    &copy;  2024 Movix by Akash Pardeshi. All Rights Reserved.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                    <a className="iconLink" href="https://www.facebook.com/akash.pardeshi.54966?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    </span>
                    <span className="icon">
                    <a className="iconLink" href="https://instagram.com/akashpardeshiap?igshid=ZGUzMzM3NWJiOQ==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    </span>
                    <span  className="icon">
                    <a className="iconLink" href="https://www.linkedin.com/in/akash-pardeshi-755917206" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;