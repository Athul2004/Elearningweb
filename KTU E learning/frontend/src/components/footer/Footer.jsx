import React from 'react';
import "./footer.css";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
        <div className='footer-content'>
            <p>
                &copy; 2024 Your KTU E-Learning Platform. All rights reserved. 
                <br/>Made with ❤️ <a href='https://athuls.netlify.app/'>Athul S</a>

            </p>
            <div className='social-link'>
                <a href='https://www.linkedin.com/in/athul-s-1638a1227/'><IoLogoLinkedin /></a>
                <a href='https://www.instagram.com/athul___s____/'><FaSquareInstagram /></a>
                <a href='https://github.com/Athul2004'><FaGithub /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer