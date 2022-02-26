import React from 'react'
import img10 from "../image/carousel .png"
import big1 from "../image/fliko big.png"
import edu from "../image/education.png"
import edu1 from "../image/layer15..png"
import edu2 from "../image/layer19.png"
import Carousel from './Carousel'
import img18 from '../../src/static/Rich_Analytics.png'
// import log1 from "../../src/static/Browser_stack.png"
import img17 from "../../src/static/DevOps_and_Agile_Adaptibility.png"

// import { Carousel } from 'bootstrap'

function Flinko(props) {
  const render = () => {
    props.history.push("./signup")
  }
  const demo = () => {
    console.log(props);
    props.history.push("./requestdemo")
  }
  return (
    <div >
      <div className='container'>
        <div className='row mt-4 l-top'>
          <div className='col-md-6'>
            <h1 className='h-main '>Test Automation.Redefined.</h1>
            <h6 className='s-main mt-3'>Scriptless solutions for all your functional, web service tests</h6>
            <p className='t-main mt-3'>Flinko uses AI to create stable and reliable automated tests faster than ever and to speed-up the executions and maintenance of your automated tests. No coding skills required.</p>
            <button className='btn rounded-pill px-4 py-2 text-white m-btn' onClick={render}>Start Free trail</button>
          
          </div>
          <div style={{position:"relative",left:"400px", bottom:"250px"}}>  <Carousel/></div>
        
          <div style={{marginTop:"-30%"}}className='col-md-6 d-flex justify-contxt-center align-item-center top'>
            <div className='std'>
              <div className='aaa'>
                <div className='rrr'>
                  <div className='hhh'>
                    <div className='eee'>
                      <div className='d-flex justify-content-center align-item-center h-100'>
                        <img src={img10} width="350px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>



      <div className='line' >
        <p className=' mt text-white text-center'>Looking for live Demo? Book your 1hr live training right now</p>

      </div>
      <div>
        <button className='btn rounded-pill qwe px-4' style={{marginLeft:"45%"}} onClick={demo}>Request a Demo</button>
      </div>

      <div>
        <h4 className='code px-2 '>Single Thread Multi Channel Execution</h4>
      </div>
      <div className='mx-auto'>
        <img src={big1} className="mx-auto d-flex align-item-center mt-4 " width="900px" />
      </div>

      <div>
        <h4 className='code px-2 '>Would you love to know what makes us unique?</h4>
      </div>


      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card core shadow rounded border-none mt-4 '>
              <div className='card-body bg-light'>
                <div>
                  <img src={edu} width="65px" className='zxc' />
                </div>
                <h5 className='www'>Rich NLP Library</h5>
                <div>
                  <p className='care'>
                    NLP Powered Scriptless Automation Engine. No code: Natural language scripts Optimized to handle all stages of automation...
                  </p>
                </div>
                <button className='d-flex  btn rounded-pill border-primary py-0 px-3 azx'>
                  <p className='padd'>Read more</p>
                  <i class="fa-solid fa-circle-chevron-right  lll"></i>
                </button>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='card core shadow rounded border-none mt-4 '>
              <div className='card-body bg-light'>
                <div>
                  <img src={edu1} width="65px" className='zxc' />
                </div>
                <h5 className='www'>Rich Reports</h5>
                <div>
                  <p className='care'>
                    AI - assisted dashboards & analytics help the decision makers oversee all the aspects of the entire application under test...
                  </p>
                </div>
                <button className='d-flex  btn rounded-pill border-primary py-0 px-3 azx'>
                  <p className='padd'>Read more</p>
                  <i class="fa-solid fa-circle-chevron-right  lll"></i>
                </button>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='card core shadow rounded border-none mt-4 '>
              <div className='card-body bg-light'>
                <div>
                  <img src={edu2} width="65px" className='zxc' />
                </div>
                <h5 className='www'>Robust Execution</h5>
                <div>
                  <p className='care'>
                    Flinko serves with not just what the testing world today needs, but beyond. Experience it now !
                    Execution Dashboard did it performance against the defined ..
                  </p>
                </div>
                <button className='d-flex  btn rounded-pill border-primary py-0 px-3 azx'>
                  <p className='padd'>Read more</p>
                  <i class="fa-solid fa-circle-chevron-right  lll"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
<br />
<br />
<br />
<div id='p1'>
  <div id="p2">
    <br />
    <br />
    <br />
    <br />
    <br />
  <h4 style={{color:' #26428b'}}>Integrations</h4>
  <br />
  <h5 style={{color:' #26428b'}}>Flexibly can fit to your environment</h5>
  <p id='p3'>Integrates well with any of the third party tools.
<br/>No need to test enterprise application in isolation any more. 
<br /> Open enough to fit in any of your preferred ALM tools to support seamless dataflow 
<br/>between any of your existing plugins to support true E2E testing be it for defect tracking,
<br/> say the popular defect tracking tools like Jira, Bugzilla, Mantis etc… or the cloud testing 
<br/>platforms like browser stack, SauceLabs etc… or the continues integration tools like 
<br/> Jenkins, Bamboo, Teamcity etc… are few third party plugins to name which are integrated.  
<br/>You name it, we will be able to integrate your preferred tools in no time ! </p>
<br />
<br />
<br />
<br />
</div>
</div>
 <div id='devops'>
   {/* <img src='{log1}'/> */}
 </div>
<div>
  <div id='idimg17'>
    <img  id='img17' src={img17} width="400px"/>
    
  </div>
  <div id='idline'>
 
<h1 style={{color:' #26428b'}}>DevOps and Agile Adaptibility</h1>
<h4>DevOps</h4>
<p>Integrates with your DevOps pipeline for relentless testing to ensure quick turnaround.
   <br/> Schedule your execution and forget it, Flinko would run it for you anytime.</p>
   <h4>Agile Adaptibility</h4>
   <p> Flinko is a strategic investment for business, to reduce TCO and ensure quality is maintained
   <br /> with a faster time to market.</p>
   <p>Conventional automation testing uses “scripting", which requires knowledge about native 
     <br /> scripting languages supported by automation tools. </p>
   </div>
</div>
<br />
<div id='btndiv'>
<button className='d-flex  btn rounded-pill border-primary py-0 px-3 azx'>
                  <p className='padd'>Read more</p>
                  <i class="fa-solid fa-circle-chevron-right  lll"></i>
                </button>
                </div>
              
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                <div id=' richid'>
                  <div id ="richdiv">
                    <h1 style={{color:'#26428b'}}>Rich Analytics</h1>
                    <p>Execution Logs, screenshots, video with suggestions for debugging at all levels of execution be 
                      <br />it a single script or a suite of suites.</p>

           <p> Easily detects the root because of repeated script, element failure especially the application 
             <br /> issues with smart, AI based result logs & highlights of failure & its possible causes.</p>
                  </div>
               
               <div id='idimg18'>
    <img  src={img18} width="420px"/>
               </div>
                </div>
  
  <br />
   
   
   <div>
       <div className='line4' >
          <div id='line5'>   
          <br />
          <br />
        <h5>Ready to explore? </h5>
       
        <p>Let our team experts walk you through how Flinko could help you to achieve continuous testing</p> 
        </div> 
</div>
      </div>
      <div>
        <button className='btn rounded-pill qwe px-4' style={{marginLeft:"83%",marginTop:"-5%",color:'white'}} onClick={demo}>Request a Demo</button>
      </div >
      <div id='line9'>
        <br />
        <br />
         
          <div id='line10'>
           <h6>Platforms</h6>
            <p>Web <br />Mobile <br />web Service</p>
         </div>
         <br />
         <br />
            <div id='insights1'>
             <h6>Insights</h6>
                <p>Why Flinko <br />Flinko's objectives <br />Our solution stages <br /> Key benefits</p>
                </div>
                <br />
     <div id='pricing1'>
       <h6>Pricing</h6>
       <p>Cloud Basic <br /> Cloud Professional <br />On premises - Enterprise</p>
     </div>
  <br />
  <br />
<div id='pricing2'>
       <h6>Support</h6>
       <p>Contact Us <br /> Request a demo <br />Terms of Use</p>
     </div>
    
 <div  id='pricing3'>
   <h6>Company Address</h6>
   <p>Flinko, Vijayarangam Layout,Jayanagar <br />Bengaluru,karnataka 560070.</p>
  
   <br />
     
 </div>
 <br />
 </div>
 </div>
    
  )
}

export default Flinko