import React from 'react'
import '../App.css'
import logo from './photo/logo.png'

export default function Footer() {
  return (
    <footer>
        <div className="footer_section">
            <div>
                <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://github.com/JBSiena?tab=repositories"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/siena-john-benjie-a538332b7/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <a href="#Home"><img src={logo} alt="Logo" className="footer_logo"/></a>
            <h3 className="footer_h3">John Benjie Siena<br/><span>OWNER</span></h3>
        </div>
    </footer>
  )
}
