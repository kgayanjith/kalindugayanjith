"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Experience() {
  const sectionRef = useRef(null);
  const ex_1 = useRef(null);
  const ex_2 = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [ex_1.current, ex_2.current];

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
      <section>
        <div className="container">
          <div className="heading-wrapper text-center py-5 mt-4">
            <h2 className="section-heading text-white home-page__title">
              My Professional Experience
            </h2>
          </div>
          <div className="experience-wrapper" ref={sectionRef}>
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-2" ref={ex_1}>
                <div className="row justify-content-center text-white">
                  <div className="col-md-2 col-3 flexing-col">
                    <div className="company-logo-wrapper p-2 rounded-circle">
                      <div className="bg-danger p-1 rounded-circle">
                        <img
                          src="assets/self.png"
                          className="w-100 rounded-circle"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="vertical-bar mt-2"></div>
                  </div>
                  <div className="col-md-10 col-9 ">
                    <div className="position-wrapper">
                      <h3>Freelance Web Developer</h3>
                    </div>
                    <div className="company-wrapper">
                      <h6>Freelance </h6>
                    </div>
                    <div className="time-wrapper">
                      <p className="text-secondary">October 2023 - Present</p>
                    </div>
                    <div className="details-wrapper">
                      <li className="mb-2">
                        Create visually appealing Figma UI/UX designs and
                        translate them into high-performance, responsive
                        websites.
                      </li>
                      <li className="mb-2">
                        Collaborate with clients to define project requirements,
                        integrate APIs, and ensure timely delivery while
                        maintaining usability and modern design standards.
                      </li>
                      <li className="mb-2">
                        Implement interactive features using EmailJS, Vanta.js,
                        and Three.js to enhance user experience.
                      </li>
                      <li className="mb-2">
                        Optimize performance, troubleshoot issues, and enhance
                        reliability of web applications to deliver seamless user
                        experiences.
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" ref={ex_2}>
                <div className="row justify-content-center text-white">
                  <div className="col-md-2 col-3 flexing-col">
                    <div className="company-logo-wrapper p-2 rounded-circle">
                      <div className="bg-white p-1 rounded-circle">
                        <img
                          src="assets/weblook.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="vertical-bar mt-2"></div>
                  </div>
                  <div className="col-md-10 col-9 ">
                    <div className="position-wrapper">
                      <h3>Full Stack Developer</h3>
                    </div>
                    <div className="company-wrapper">
                      <h6>Weblook International (Pvt) Ltd </h6>
                    </div>
                    <div className="time-wrapper">
                      <p className="text-secondary">
                        January 2024 - January 2025
                      </p>
                    </div>
                    <div className="details-wrapper">
                      <li className="mb-2">
                        Contributed to developing responsive web applications
                        using Vue.js, Laravel, Tailwind CSS, and Bootstrap.
                      </li>
                      <li className="mb-2">
                        Collaborated with design and backend teams to deliver
                        scalable, user-friendly solutions.
                      </li>
                      <li className="mb-2">
                        Integrated APIs, optimized performance, and resolved
                        bugs to enhance reliability and overall user experience.
                      </li>
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
