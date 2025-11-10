"use client";
import { motion, AnimatePresence } from "framer-motion";
import { words } from "../../constants/index.js";
import { useState, useEffect, useRef } from "react";
import Model from "../../components/model.js";
import Button from "../../components/button.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link.js";


export default function ProfilePage() {
const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev === words.length - 1) {
          setReverse(true);
          return 0;
        } else {
          setReverse(false);
          return prev + 1;
        }
      });
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="home-page text-white position-relative">
        <div
          className="row w-100 container-fluid align-items-center"
          style={{ zIndex: 9999 }}
        >
          <div className="col-lg-10">
            <div className=" container hero-text ps-md-1 ps-lg-4">
              <h1 className="home-page__title d-flex align-items-center position-relative">
                Building Your
                <span className=" ps-3">
                  <AnimatePresence>
                    <motion.div
                      key={index}
                      initial={{ rotateX: 90, opacity: 0, y: 30 }}
                      animate={{ rotateX: 0, opacity: 1, y: 0 }}
                      exit={{ rotateX: -90, opacity: 0, y: -30 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="position-absolute top-0 align-items-center d-flex gap-2"
                      style={{
                        transformOrigin: "center",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <img
                        src={words[index].imgPath}
                        alt=""
                        className="rounded-circle p-1 rolling-image"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: '#D9ECFF',
                        }}
                      />
                      <span style={{ color: '#ffffffff'}}>
                        {words[index].text}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </span>
              </h1>
              <h1 className="home-page__title">into Digital Reality</h1>
              <h1 className="home-page__title">that Inspires</h1>
              <div>
                <p className="tag-lilne pt-3">Hi, I’m Kalindu from Sri Lanka. I create sleek, interactive websites that feel alive.</p>
              </div>
              <div className="btn-grp pt-5">
                <Button label="See my Projects" className="px-md-5 py-md-2 px-3 py-2 btn-custom fw-semibold me-2" type="submit" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 pt-5 mt-3 mt-lg-0 pt-lg-0 pe-lg-5">
           
                   <div className="wrapper-inner d-flex text-end">
                    <div className="logo-wrapper pb-0 pb-lg-4">
                      <Link href="/404-not-found">
                        <img src="/assets/github.png" className="" width={50} alt="" />
                      </Link>
                    </div>
                    <div className="logo-wrapper">
                      <a href="">
                        <img src="/assets/linkedin.png" className="" width={50} alt="" />
                      </a>
                    </div>
                    </div>     
        </div>
        </div>
        <div className="position-absolute h-100 w-100" style={{ zIndex: 0 }}>
          <Model />
        </div>
      </section>
    </>
  );
}