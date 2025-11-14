"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { counterItems } from "../../constants/index.js";
import { bio } from "../../constants/index.js";
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

export default function ProfilePage() {
  const sectionRef = useRef(null);
  const profileRef = useRef(null);
  const nameRef = useRef(null);
  const bioRef = useRef(null);
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [profileRef.current, nameRef.current, bioRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 }, // Ensures whole numbers
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
        },
        // Add the suffix after counting is complete
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);
  return (
    <>
      <Element name="profile">
        <div className="section" ref={sectionRef}>
          <div className="container">
            <div className="heading-wrapper text-center py-5">
              <h2 className="section-heading text-white home-page__title">
                Professional Overview
              </h2>
            </div>
            <div className="row justify-content-center pt-2">
              <div className="col-10 col-md-4 col-lg-3" ref={profileRef}>
                <div className="text-center">
                  <div className="imge-wrapper border rounded-circle overflow-hidden p-2 border-2">
                    <img
                      src="assets/portfolio-bwr.png"
                      className="w-100 h-100"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="wrapper-tag pt-4 text-center" ref={nameRef}>
                <p className="fs-3 text-white stack">Kalindu Gayanjith</p>
                <p className="tag-lilne-pro">
                  <span className="px-4 py-1 rounded-5">
                    Full-Stack Developer | Laravel, React, Vue, Python & Figma
                  </span>
                </p>
              </div>
            </div>
            <div className="row text-center" ref={bioRef}>
              <div className="col-md-10 col-lg-8 justify-content-center mx-auto pt-4 text-white">
                <div className="overview-text">
                  <p>{bio}</p>
                </div>
              </div>
            </div>
            <div
              className="row justify-content-center pt-5 text-white text-center"
              ref={counterRef}
            >
              {counterItems.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => el && (countersRef.current[index] = el)}
                  className="col-6 col-md-4 col-lg-3"
                >
                  <div className="counter-number mb-2 fs-1 fw-bold">
                    0 {item.suffix}
                  </div>
                  <div className="">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}
