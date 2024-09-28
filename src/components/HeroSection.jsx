import React from "react";
import '../App.css';
import bg from './photo/bg.jpg'

function Hero() {
    return (
    <div className="hero_section" id="Home">
        <img src={bg} className="bg_img" />
        <h1 className="hero_h1">Web Designer<br/>& Developer</h1>
        <h3 className="hero_h3">Hi,  I’m John Benjie Siena, and I’m a Web Developer<br/>Designer with a passion for creating innovativeand<br/>user-friendly digital experiences.</h3>
        <button class="hero_btn"><a href="https://github.com/JBSiena?tab=repositories" className="button">Know More</a></button>
    </div>
    );
}

export default Hero;