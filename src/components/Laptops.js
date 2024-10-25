import React, { useEffect, useRef } from "react";
import { Image } from "react-bootstrap";
import { images } from "../assets/assets";
import { gsap } from "gsap";

const Laptops = () => {
    const laptop1Ref = useRef(null);
    const laptop2Ref = useRef(null);
    useEffect(() => {
        const scaleTimeline = gsap.timeline({ repeat: -1, yoyo: true });
        scaleTimeline.fromTo(laptop1Ref.current,{ scale: 1 },{ scale: 1.1, duration: 2 });
        scaleTimeline.fromTo(laptop2Ref.current,{ scale: 1 },{ scale: 1.1, duration: 2 });
        return () => {
          scaleTimeline.kill();
        };
    }, []);
  return (
    <section className="laptop-section">
    <div className="laptops d-flex ">
    <div className="laptop-1" ref={laptop1Ref}>
      <Image src={images.laptopOne} alt="laptop" />
    </div>
    <div className="laptop-2" ref={laptop2Ref}>
      <Image src={images.laptopTwo} alt="laptop" />
    </div>
  </div>
  </section>
  )
}

export default Laptops