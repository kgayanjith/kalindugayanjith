"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function keySkills() {
  const sectionRef = useRef(null);
  const skill_1 = useRef(null);
  const skill_2 = useRef(null);
  const skill_3 = useRef(null);
  const skill_4 = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [skill_1.current, skill_2.current, skill_3.current, skill_4.current];

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
              My Key Skills
            </h2>
          </div>
          <div className="skill-wrapper text-white" ref={sectionRef}>
            <div className="row text-center justify-content-around">
              <div className="col-md-5 mb-5" ref={skill_1}>
                <div className="skill-border py-3 px-3 rounded-4">
                  <p className="fs-5 fw-semibold">Frontend Development</p>
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img src="assets/vuejs.png" className="w-100" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img src="assets/react.png" className="w-100" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img src="assets/nextjs.png" className="w-100" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/inertiajs.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/js.png"
                          className="w-100 rounded-2"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/jquery.png"
                          className="w-100 h-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mb-5" ref={skill_2}>
                <div className="skill-border py-3 px-3 rounded-4">
                  <p className="fs-5 fw-semibold">Backend & Intergration</p>
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/laravel.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/rest.png"
                          className="w-100 rounded-2"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img src="assets/axios.png" className="w-100" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/postman.png"
                          className="w-100 rounded-circle"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img src="assets/python.png" className="w-100" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/c.png"
                          className="w-100 h-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mb-5" ref={skill_3}>
                <div className="skill-border py-3 px-3 rounded-4">
                  <p className="fs-5 fw-semibold">UI / UX & Styling</p>
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/tailwindcss.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2 h-200">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/bootstrap.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/materialui.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/flowbite.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/css.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img src="assets/figma.png" className="w-100" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mb-5" ref={skill_4}>
                <div className="skill-border py-3 px-3 rounded-4">
                  <p className="fs-5 fw-semibold">Version Control & Other</p>
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img src="assets/git.png" className="w-100" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2 h-200">
                      <div className="icon-wrapper p-1">
                        <img src="assets/github.png" className="w-100" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img src="assets/gitlab.png" className="w-100" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/cicd.png"
                          className="w-100 rounded-circle"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/agile.png"
                          className="w-100 rounded-circle"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                      <div className="icon-wrapper p-1">
                        <img
                          src="assets/copilot.png"
                          className="w-100 rounded-circle"
                          alt=""
                        />
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
