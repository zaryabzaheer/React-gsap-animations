import React, { useEffect, useRef } from "react";
import { Image } from "react-bootstrap";
import  {images} from '../assets/assets'
import { gsap } from "gsap";

const UnlockValue = () => {
  const leftUnlockRef = useRef(null);
  const rightUnlockRef = useRef(null);
  const textRef2 = useRef(null);
  useEffect(() => {
    const leftTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    leftTimeline.fromTo(leftUnlockRef.current,{ x: "0%" },{ x: "30%", duration: 10 });
    const rightTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    rightTimeline.fromTo(rightUnlockRef.current,{ x: "0%" },{ x: "-30%", duration: 10 });
    const textTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    textTimeline.fromTo(
        textRef2.current,
        { opacity: 0, y: -10 }, 
        { opacity: 1, y: 0, duration: 1 } 
      )
      .to(textRef2.current, { opacity: 0, duration: 1 })
      .set(textRef2.current, { opacity: 0 }); 
    return () => {
        leftTimeline.kill();
        rightTimeline.kill();
        textTimeline.kill();
      };
  }, []);
  
  const flipAndBounce = () => {
    gsap.to(".ai-music", {
      rotationY: 360,
      duration: 1,
      ease: "bounce4.out",
      transformOrigin: "50% 50%",
      repeat: -1,
      yoyo: true
    });
  };

  useEffect(() => {
    flipAndBounce();
  }, []);

  return (
    <section className="unlock-section">
    <div className="unlock-value">
      <div className="left-unlock" ref={leftUnlockRef}>
        <Image src={images.leftUnlock} alt="unlock" />
      </div>
      <div className="right-unlock" ref={rightUnlockRef}>
        <Image src={images.rightUnlock} alt="unlock" />
      </div>
      <div className="ai-power">
        <div className="d-flex">
          <h3 ref={textRef2}>Discover the Power of AI</h3>
          <div className="ai-music">
            <Image src={images.music} alt="music" />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default UnlockValue;
