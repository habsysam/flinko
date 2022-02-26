import React, { Component } from "react";
 import static1 from '../../src/static/carousel logo.d1bfceb0.png'
 import static2 from '../../src/image/Mobile.png'
import ReactCardCarousel from "react-card-carousel" ;
import static3 from '../../src/static/Web_Service.png';
import static4 from '../../src/static/Web.png'
// import { Carousel } from "bootstrap";

class Carousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "325%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
      
    };
  }

  static get CARD_STYLE() {
    return {
      // height: "300px",
      // width: "300px",
      paddingTop: "80px",
      textAlign: "center",
      background: "white",
      color: "black",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box",
      // margin:"20px"
    };
  }

  render() {
    return (
      <div id ='carousel'style={Carousel.CONTAINER_STYLE} >
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
        <div  style={Carousel.CARD_STYLE} >
            <div id="web" > <div style={{  }}><img src={static1 } width="300px"  />
          </div></div></div>

          <div id="web" style={Carousel.CARD_STYLE }>
            
         <div></div>   <div style={{}}><h1>Web</h1 ><p>Automation of web application is
               <br/> now taking a turn with codeless, 
               <br/> sophisticated NLP based way to 
               <br /> handle all types of actions and
                <br /> verifications effortlessly.</p>
            </div></div>
          <div id="web" style={Carousel.CARD_STYLE}>
            <div style={{marginLeft:'10%'}}> <br /><div><img src={static2} width="20px" style={{}}/></div><h1>Mobile</h1>Flinko is opening up a new horizon<br/> for mobile app testing teams with 
            <br/>its abridged form of automation  <br/>with its deep pocketed mobile <br/> specific NLP's library.
            </div></div>

          <div id="web" style={Carousel.CARD_STYLE}>
            <div><div><img src={static3} width="70px" style={{}}/></div><h1>Web Serivce</h1> Get on toes with our Web Service<br/> testing which drives you <br/>unstoppable towards testing the<br/> deep web service layers in minutes<br/> with all intricacies.</div></div>
          
        </ReactCardCarousel>
        <div>
          
        </div>
      </div>
    );
  }
}
 export default Carousel;
