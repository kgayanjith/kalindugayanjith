"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Element } from "react-scroll";

export default function EducationPage() {
  const sectionRef = useRef(null);
  const edu_1 = useRef(null);
  const edu_2 = useRef(null);
  const edu_3 = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [edu_1.current, edu_2.current, edu_3.current];

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
  return (
    <>
      <Element name="education">
        <section ref={sectionRef}>
          <div className="container">
            <div className="heading-wrapper text-center py-5 mt-4">
              <h2 className="section-heading text-white home-page__title">
                My Education
              </h2>
            </div>
            <div className="education-wrapper text-white">
              <div className="row ">
                <div className="col-lg-6 mb-4">
                  <div className="edu-section px-4 py-3 h-100" ref={edu_1}>
                    <div className="row align-items-center">
                      <div className="col-md-3 col-6 ps-0 ps-md-2">
                        <div className="logo-wrapper bg-white p-2 rounded-3 mb-4 mb-md-0">
                          <img
                            src="assets/yural.png"
                            className="w-100"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="dec">
                          <p className="fs-5 fw-semibold mb-0">
                            MSc in Artificial Intelligence (Reading)
                          </p>
                          <p className="text-secondary mb-0">
                            Ural Federal University, Russia
                          </p>
                          <p className="mb-0">2025 - Present</p>
                        </div>
                      </div>
                    </div>
                    <div className="feature">
                      <p className="pt-3">
                        Pursuing advanced studies in AI, exploring machine
                        learning, deep learning, and real-world applications of
                        intelligent technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="edu-section px-4 py-3 h-100" ref={edu_2}>
                    <div className="row align-items-center">
                      <div className="col-md-3 col-6 ps-0 ps-md-2">
                        <div className="logo-wrapper bg-white p-2 rounded-3 mb-4 mb-md-0">
                          <img
                            src="assets/dublin.jpg"
                            className="w-100"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="dec">
                          <p className="fs-5 fw-semibold mb-0">
                            BSc (Hons) in Management Information Systems
                          </p>
                          <p className="text-secondary mb-0">
                            University College Dublin, Ireland
                          </p>
                          <p className="mb-0">2019 - 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="feature">
                      <p className="pt-3">
                        Completed a Bachelor of Science (Hons) in Management
                        Information Systems, combining business strategy with
                        technology-driven solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="edu-section px-4 py-3 h-100" ref={edu_3}>
                    <div className="row align-items-center">
                      <div className="col-md-3 col-6 ps-0 ps-md-2">
                        <div className="logo-wrapper bg-white p-0 rounded-3 mb-4 mb-md-0">
                          <img
                            src="assets/school.jpg"
                            className="w-100 rounded-3"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="dec">
                          <p className="fs-5 fw-semibold mb-0">
                            G.C.E A/L & O/L (Commerce)
                          </p>
                          <p className="text-secondary mb-0">
                            Isipathana College, Colombo-5
                          </p>
                          <p className="mb-0">2006 - 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="feature">
                      <p className="pt-3">
                        Completed secondary education at Isipathana College,
                        including G.C.E. Advanced Level and Ordinary Level
                        examinations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
}
