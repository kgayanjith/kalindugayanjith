"use client";

import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Element } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function ContactPage() {
  const form = useRef();
  const recaptchaRef = useRef();
  const [captchaValid, setCaptchaValid] = useState(false);
  const sectionRef = useRef(null);
  const con_1 = useRef(null);
  const con_2 = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [con_1.current, con_2.current];

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

  useEffect(() => {});

  const sendEmail = (e) => {
    e.preventDefault();

    const captchaValue = recaptchaRef.current.getValue();

    if (!captchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }

    emailjs
      .sendForm(
        "service_e7hsskf",
        "template_ddp5f9s",
        form.current,
        "itxDt64nW4YCYr1sI"
      )
      .then(
        (result) => {
          console.log(result.text);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Message Sent",
            text: "Your message has been delivered.",
            iconColor: "#ffffffff",
            theme: "dark",
            customClass: {
              timerProgressBar: "custom-timer-bar-dark",
            },
          });
          form.current.reset();
          recaptchaRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "error",
            title: "Failed to Send",
            text: "Something went wrong. Please try again later.",
            theme: "dark",
            iconColor: "#ffffffff",
            customClass: {
              timerProgressBar: "custom-timer-bar-dark",
            },
          });
        }
      );
  };
  return (
    <>
      <Element name="contact">
        <section ref={sectionRef}>
          <div className="container">
            <div className="heading-wrapper text-center py-5 mt-4">
              <h2 className="section-heading text-white home-page__title">
                How to Contact Me
              </h2>
            </div>
            <div className="contact-wrapper text-white">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4">
                  <div className="wrapper-details" ref={con_1}>
                    <p className="fs-3 fw-semibold">Get in Touch</p>
                    <p className="fw-lighter">
                      Have an idea, project, or opportunity you’d like to talk
                      about? Let’s make it happen! You can reach me directly by
                      email or send a message on LinkedIn. I’m always happy to
                      connect, collaborate, and explore new possibilities.
                    </p>
                    <div className="social-wrapper pt-3 d-flex">
                      <div className="set me-3 px-3 py-1 rounded-5">
                        <a
                          className="text-white text-decoration-none"
                          href="mailto:kalindugayanjith@gmail.com"
                        >
                          <i className="fa-solid fa-envelope pe-2"></i>
                          Gmail
                        </a>
                      </div>
                      <div className="set px-3 py-1 rounded-5">
                        <a
                          className="text-white text-decoration-none"
                          href="https://linkedin.com/in/kalindugayanjith"
                          target="_blank"
                        >
                          <i className="fa-brands fa-linkedin pe-2"></i>
                          Linkedin
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6" ref={con_2}>
                  <form
                    className="send-mail-wrapper p-4 p-md-5 p-lg-5 rounded-5"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <div className="text-contact">
                      <p className="fs-4">Send me a Message</p>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          aria-label="name"
                          id="name"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          aria-label="reason"
                          id="email"
                          required
                        />
                      </div>
                      <div className="col mb-3 mb-3">
                        <label htmlFor="reason" className="form-label">
                          Reason
                        </label>
                        <input
                          type="text"
                          name="reason"
                          className="form-control"
                          aria-label="reason"
                          id="reason"
                          required
                        />
                      </div>
                      <div className="col-md-12 mb-3 mb-3">
                        <label htmlFor="message" className="form-label">
                          Message
                        </label>
                        <textarea
                          name="message"
                          className="form-control"
                          aria-label="message"
                          id="message"
                          required
                          rows={4}
                        ></textarea>
                      </div>
                      <div style={{ margin: "10px 0" }} className="pb-2">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey="6LdTNAssAAAAAJf3WVIM7ig7rE4FMjNgkG6ujUnw"
                          onChange={() => setCaptchaValid(true)}
                          onExpired={() => setCaptchaValid(false)}
                          theme="dark"
                        />
                      </div>
                      <div className="mb-3 text-center">
                        <div className="send-wrapper">
                          <button
                            className="btn custom-btn-2 mt-4 px-5 py-2"
                            type="submit"
                            disabled={!captchaValid}
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
}
