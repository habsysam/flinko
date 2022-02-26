import React from 'react'
import Navbar from './Navbar'
import img4 from '../../src/image/Contact_Us.png'

function ContactUs() {
  return (
    <div>
    <div className="col-lg-6  d-flex align-items-center common_hero_section_child px-5 pl-sm-5 pr-sm-0 homeleftdiv"><div className="pl-lg-5 pl-md-3 pl-sm-3 pl-0">
      <h1 className="mainheading text-left pb-2" style={{color: ' #26428b'}}>Contact Us</h1><h6 class="web_firstdivtitlep text-left pb-2"style={{color:"#26428b" }}>Want us to reach you out?</h6><p class="insightHeadP text-left" style={{color:"#26428b"}}>Get in touch and we will connect you with the Flinko expert who can best assist you at your earliest</p>
    <div className="d-flex align-items-center mt-4 "><a id="pill" href="https://app.flinko.com/signup">Start free trial</a></div></div></div>
     
    <img src={img4} className="common-resp_img" alt=""/>
    
    <div id="line1">
      <div id ='line2'><div className="api_second_div_bg  h-auto position-relative d-flex align-items-center justify-content-center py-3">
      <p id='demo'>Looking for live Demo? Book your 1hr live training right now</p><a class="apismallerdivparent" href="/requestdemo"><div class="mx-auto px-4 api_smallerdiv  ">
       </div></a></div></div></div>
       <div id="divdemo"> Request a demo</div>
    <p class="contact-addpara mb-0">Flinko, Vijayarangam Layout, Jayanagar, Bengaluru, Karnataka 560070.</p>
    
      ContactUs</div>
  )
}

export default ContactUs