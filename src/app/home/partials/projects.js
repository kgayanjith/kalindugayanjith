"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Element } from "react-scroll";


export default function ProjectPage() {
  const sectionRef = useRef(null);
  const p_1 = useRef(null);
  const p_2 = useRef(null);
  const p_3 = useRef(null);
  const p_4 = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [p_1.current, p_2.current, p_3.current, p_4.current];

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
   <Element name="projects">
       <section ref={sectionRef}>
        <div className="container">
          <div className="heading-wrapper text-center py-5 mt-4">
            <h2 className="section-heading text-white home-page__title">
              My Projects
            </h2>
          </div>
          <div className="project-wrapper text-white">
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="project rounded-4 p-3" ref={p_1}>
                  <div className="row">
                    <div className="col-9">
                      <div className="project-name">
                        <p className="">
                          kgayanjith/
                          <span className="fw-bold">
                            kalindugayanjith-portfolio
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="icon p-2">
                        <img src="assets/github.png" className="w-100" alt="" />
                      </div>
                    </div>
                  </div>
                  <p className="text-white-50">
                    A modern Next.js portfolio with smooth animations, 3D
                    effects, and responsive design to showcase projects and
                    skills.
                  </p>
                  <div className="tect-stack d-flex align-items-center">
                    <div className="icon">
                      <img
                        src="assets/nextjs.png"
                        className="bg-white rounded-3"
                        width={40}
                        alt=""
                      />
                    </div>
                    <div className="icon">
                      <img
                        src="assets/js.png"
                        className="bg-white rounded-3"
                        width={40}
                        alt=""
                      />
                    </div>
                    <div className="icon">
                      <img
                        src="assets/threejs.png"
                        className="bg-white rounded-3"
                        width={40}
                        alt=""
                      />
                    </div>
                    <div className="icon">
                      <img
                        src="assets/emailjs.png"
                        className="bg-white rounded-3"
                        width={40}
                        alt=""
                      />
                    </div>
                    <div className="icon">
                      <img
                        src="assets/bootstrap.png"
                        className="bg-white rounded-3"
                        width={40}
                        alt=""
                      />
                    </div>
                    <div className="icon">
                      <img
                        src="assets/css.png"
                        className="bg-white rounded-3"
                        width={40}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="project rounded-4 p-3" ref={p_2}>
                  <div className="row">
                    <div className="col-9">
                      <div className="project-name">
                        <p className="">
                          kgayanjith/<span className="fw-bold">chat-bot</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="icon p-2">
                        <img src="assets/github.png" className="w-100" alt="" />
                      </div>
                    </div>
                  </div>
                  <p className="text-white-50">
                    A Python-based chatbot built with Flask that learns from
                    user input and provides intelligent responses using pattern
                    matching.
                  </p>
                  <div className="tect-stack d-flex align-items-center">
                    <div className="icon">
                      <img
                        src="assets/python.png"
                        className="bg-white rounded-3"
                        width={40}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="project rounded-4 p-3" ref={p_3}>
                  <div className="row">
                    <div className="col-9">
                      <div className="project-name">
                        <p className="">
                          kgayanjith/
                          <span className="fw-bold">gym-management-system</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="icon p-2">
                        <img src="assets/github.png" className="w-100" alt="" />
                      </div>
                    </div>
                  </div>
                  <p className="text-white-50">
                    C# Windows Forms app with modern UI (Guna.UI & Bunifu_UI)
                    and Azure integration. DLLs required to run.
                  </p>
                  <div className="tect-stack d-flex align-items-center">
                    <div className="icon">
                      <img
                        src="assets/c.png"
                        className="bg-white rounded-3"
                        width={40}
                        alt=""
                      />
                    </div>
                    <div className="icon">
                      <img
                        src="assets/azure.png"
                        className="bg-white rounded-3"
                        width={40}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="project rounded-4 p-3" ref={p_4}>
                  <div className="row">
                    <div className="col-9">
                      <div className="project-name">
                        <p className="">
                          kgayanjith/
                          <span className="fw-bold">react-todo</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="icon p-2">
                        <img src="assets/github.png" className="w-100" alt="" />
                      </div>
                    </div>
                  </div>
                  <p className="text-white-50">
                    A React To-Do app with Bootstrap, React Router navigation,
                    and interactive SweetAlert2 alerts for task management.
                  </p>
                  <div className="tect-stack d-flex align-items-center">
                    <div className="icon">
                      <img
                        src="assets/react.png"
                        className="bg-white rounded-3"
                        width={40}
                        alt=""
                      />
                    </div>
                    <div className="icon">
                      <img
                        src="assets/bootstrap.png"
                        className="bg-white rounded-3"
                        width={40}
                        alt=""
                      />
                    </div>
                    <div className="icon">
                      <img
                        src="assets/js.png"
                        className="bg-white rounded-3"
                        width={40}
                        alt=""
                      />
                    </div>
                    <div className="icon">
                      <img
                        src="assets/css.png"
                        className="bg-white rounded-3"
                        width={40}
                        alt=""
                      />
                    </div>
                    <div className="icon">
                      <img
                        src="assets/bootstrap.png"
                        className="bg-white rounded-3"
                        width={40}
                        alt=""
                      />
                    </div>
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
