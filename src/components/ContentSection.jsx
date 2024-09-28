import React from 'react';
import '../App.css';
import bg from './photo/bg_content.jpg'
import bg1 from './photo/img_content.jpg'

export default function ContentSection() {
  return (
    <div className="content_section" id="About">
        <img src={bg} class="bg_img_content" />
        <div class="wrapper_content">
            <div>
                <h1 className="content_h1_1">Importance of</h1>
                <h1 className="content_h1">Web Development</h1>
                <p className="content_p">Web development is the process of creating and maintaining websites and web applications.</p>
                <p className="content_p">This field combines aspects of programming, design, and user experience to build interactive and functional online platforms.</p>
                <p className="content_p">It involves a range of tasks including designing the site’s layout, coding its functionality, and ensuring it operates smoothly across various devices and browsers.</p>
            </div>
            <img src={bg1} className="img_content" />
        </div>
    </div>
  )
}
