import React, { useEffect, useRef } from "react";
import { Image} from "react-bootstrap";
import {images} from '../assets/assets'
import { gsap} from "gsap";
import UnlockValue from "./UnlockValue";
import Laptops from "./Laptops";

const Hero = () => {
  useEffect(() => {
    const masterTimeline = gsap.timeline({ defaults: { ease: "linear" } });
    const mobileElement = ".mobile"; 
    const shakeDistance = 10; 
    const shakeDuration = 0.1;
    masterTimeline.to(".globe",{rotation: 360,duration: 20,repeat: -1,transformOrigin: "50% 50%",},0 );
    masterTimeline.to(".music",{rotation: 360,duration: 10,repeat: -1,transformOrigin: "50% 50%",},0 );
    masterTimeline.to(mobileElement, shakeDuration, { x: `-=${shakeDistance}`,rotation: 3, yoyo: true,repeat: -1,ease: "power1.inOut",delay: shakeDuration,},0);
    masterTimeline.to(".music-icon",{y: "+=20",duration: 2,repeat: -1,yoyo: true, ease: "power1.inOut",},0 );
    masterTimeline.to(".orange-music",{y: "+=10",duration: 2,repeat: -1,yoyo: true, ease: "power1.inOut",},0 );
    masterTimeline.to(".green-music",{x: "+=20",duration: 1.8,repeat: -1,yoyo: true,ease: "power1.inOut",},0);
    masterTimeline.to( ".pink-music",{ y: "+=12",duration: 2.5,repeat: -1, yoyo: true, ease: "power1.inOut",},0);
    masterTimeline.to(".half-note",{x: "+=6",y: "+=8",duration: 2.2,repeat: -1,yoyo: true,ease: "power1.inOut",},0 );
    }, []);

  const textRef1 = useRef(null);
  useEffect(() => {
    const textTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    textTimeline
      .fromTo(textRef1.current,{ opacity: 0, y: -20 },{ opacity: 1, y: 0, duration: 1 })
      .to(textRef1.current, { opacity: 0, duration: 1 }) 
      .set(textRef1.current, { opacity: 0 });
  }, []);

  return (
    <section className="hero-section px-5">
      <h1 ref={textRef1}>Welcome to the Future of Music</h1>
      <div className="d-flex align-items-center justify-content-start">
        <div className="music-wrapper">
          <div className="music-icon">
            <Image src={images.musicIcon} alt="music-icon" />
          </div>
          <div className="music-strings">
            <Image src={images.musicStrings} alt="music-strings" />
          </div>
          <div className="orange-music">
            <Image src={images.orangeMusic} alt="music-icon" />
          </div>
          <div className="green-music">
            <Image src={images.greenMusic} alt="music-icon" />
          </div>
          <div className="pink-music">
            <Image src={images.pinkMusic} alt="music-icon" />
          </div>
          <div className="half-note">
            <Image src={images.halfNote} alt="music-icon" />
          </div>
        </div>
        <div className="globe-wrapper">
          <div className="globe">
            <Image src={images.globe} alt="globe" />
          </div>
          <div className="music">
            <Image src={images.music} alt="music" />
          </div>
          <div className="mobile">
            <Image src={images.mobile} alt="mobile" />
          </div>
        </div>
      </div>
      <UnlockValue />
      <Laptops />
    </section>
  );
};

export default Hero;
