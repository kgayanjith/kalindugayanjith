"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function SikllsPage() {
  const sectionRef = useRef(null);
  const foodzy = useRef(null);
  const animera = useRef(null);
  const lankalayouuts = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    // Animations for each app showcase
    const cards = [foodzy.current, animera.current, lankalayouuts.current];

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
        },
      );
    });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="heading-wrapper text-center py-5 mt-4">
            <h2 className="section-heading text-white home-page__title">
              My Latest Contributions
            </h2>
          </div>
          <div className="contribution-wrapper" ref={sectionRef}>
            <div className="row justify-content-center">
              <div className="col-md-7 mb-4">
                <div className="project-wrapper" ref={foodzy}>
                  <div className="project-img-wrapper">
                    <img src="assets/foodzy-bg.png" className="w-100" alt="" />
                  </div>
                  <div className="project-description-wrapper text-white mt-3">
                    <h2 className="project-title fw-bold">
                      Your Favorite Meals, Just a Tap Away with Foodzy
                    </h2>
                    <p className="">
                      A beautifully designed food delivery experience created in
                      Figma, focusing on usability, clarity, and delightful
                      visuals.
                    </p>
                    <div className="send-wrapper">
                      <a
                        className="btn custom-btn-2 mt-4 px-5 py-2"
                        href="https://www.figma.com/design/amlgeyPPmHkYEe8G4fCMxV/Food-App-UI?node-id=0-1&t=WMwBUkoQzQMbqCGe-1"
                        target="_blank"
                      >
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 mb-4">
                    <div className="project-wrapper" ref={animera}>
                      <div className="project-img-wrapper">
                        <img
                          src="assets/animera-removebg-preview.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="project-description-wrapper text-white mt-3">
                        <h4 className="project-title fw-bold">
                          Pet Care Management System
                        </h4>
                        <div className="send-wrapper">
                      <button
                        className="btn custom-btn-2 mt-4 px-5 py-2"
                        href="https://www.figma.com/design/amlgeyPPmHkYEe8G4fCMxV/Food-App-UI?node-id=0-1&t=WMwBUkoQzQMbqCGe-1"
                        target="_blank"
                        disabled
                      >
                        See Preview
                      </button>
                    </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10 mb-4">
                    <div className="project-wrapper" ref={lankalayouuts}>
                      <div className="project-img-wrapper">
                        <img
                          src="assets/mockup2-removebg-preview.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="project-description-wrapper text-white mt-3">
                        <h4 className="project-title fw-bold">
                          Lanka Layouts – Building Documentation Made Simple
                        </h4>
                        <div className="send-wrapper">
                      <a
                        className="btn custom-btn-2 mt-4 px-5 py-2"
                        href="https://lankalayouts.com/"
                        target="_blank"
                      >
                        See Preview
                      </a>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
