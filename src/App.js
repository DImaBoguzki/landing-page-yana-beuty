import React, {useEffect,useRef} from 'react';
import './App.css';

import Header from './Components/Header/header';
import Slider from './Components/Slider/slider';
import Carousel from './Components/Carousel/carousel';
import Footer from './Components/Footer/footer';
import Contact from './Components/contact/contact';
import About from './Components/About/about';
import ReactGa from 'react-ga';

import img1 from './img/data_img/yana_white-800-500.jpg';
import img2 from './img/data_img/yana_yellow-800-500.jpg';
import img3 from './img/data_img/yana-reflocologia-800-500.jpg';
import img4 from './img/data_img/yana_occean-800-500.jpg';
import img5 from './img/data_img/yana_blue-800-500.jpg';
import img6 from './img/data_img/yana-hand-black-800-500.jpg';
import img7 from './img/data_img/yana-work-800-500.jpg';
import img8 from './img/data_img/yana-foot-black-800-500.jpg';

import party1 from './img/data_img/party/1.jpg';
import party2 from './img/data_img/party/2.jpg';
import party3 from './img/data_img/party/3.jpg';
import party4 from './img/data_img/party/4.jpg';

import {WHATSAPP} from './config-page';

const App = () => {
  const wrapperRef = useRef(null)

  const setDelay = (mls) => {
      return new Promise(resolve => setTimeout(resolve, mls));
  }
  const handleScroll = async () => {
    let y=0;
    while(y<=(wrapperRef.current.offsetHeight/8)) {
      await setDelay(1);
      window.scrollTo(0,y);
      y+=1;
    }
  }
  useEffect(()=>{
    ReactGa.initialize('UA-160863378-1');
    ReactGa.pageview(window.location.pathname + window.location.search);
    handleScroll();
    // eslint-disable-next-line
  },[])
  return(
    <div className='wrapper' ref={wrapperRef}>
      <Header/>
      <div className='hiden-img'/>
      <div className="center">
      <Slider>
          <img alt="1" src={img1}/>
          <img alt="2" src={img2}/>
          <img alt="3" src={img3}/>
          <img alt='4' src={img4}/>
          <img alt='5' src={img5}/>
          <img alt='6' src={img6}/>
          <img alt='7' src={img7}/>
          <img alt='8' src={img8}/>
        </Slider>
        <Carousel>
          <div><p>פדיקור</p></div>
          <div><p>מניקור</p></div>
          <div><p>רפלקסולוגיה</p></div>
          <div><p>שעווה</p></div>
        </Carousel>
        <div className="party">
          <h3>ארגון ימי הולדת</h3>
          <p> לפטרים שלחו לי <a className="txt" href={WHATSAPP} target="_blank" rel="noopener noreferrer">הודעה</a></p>
        </div>
        <Slider>
          <img alt="1.1" src={party1}/>
          <img alt="2.2" src={party2}/>
          <img alt="3.3" src={party3}/>
          <img alt='4.4' src={party4}/>
        </Slider>
        <div className='contact-about'>
          <About/>
          <Contact/>
        </div>
      </div>
      <Footer/>
    </div>
  ); 
}

export default App;
