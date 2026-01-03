"use client";

import { tr } from "framer-motion/client";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <>
      <section
        className="position-fixed nav-wrapper mt-lg-3 w-100 justify-content-center"
        style={{
          top: 0,
          right: 0,
          left: 0,
          zIndex: 10000,
          background: "transparent",
        }}
      >
        <nav className="navbar navbar-expand-lg mx-3 mx-lg-0 mt-3 mt-lg-0">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa-solid fa-bars text-white"></span>
            </button>
            {/* <span className="d-lg-none py-2"><img src="assets/logo2.png" width={100} alt="" /></span> */}
            <Link
              to="contact"
              className="py-2 link-tag text-decoration-none d-lg-none"
            >
              <li className="contact-btn py-1">
                <div className="contact-me px-3  rounded-3 fw-regular link-tag text-decoration-none">
                  <span className="text-black">Contact me</span>
                </div>
              </li>
            </Link>
            <div
              className="collapse navbar-collapse justify-content-center "
              id="navbarNav"
            >
              <ul className="navbar-nav d-flex rounded-4 px-5 py-3 py-lg-1 gap-3 align-items-center rounded-pill">
                <li className="nav-item">
                  <Link
                    className="nav-link link-tag"
                    aria-current="page"
                    to="profile"
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-tag" to="projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-tag" to="experience">
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-tag" to="/demos">
                    Demos
                  </Link>
                </li>
                <li className="nav d-none d-lg-block">
                  <Link className="nav-link link-tag" to="hero">
                    <span>
                      <img
                        src="assets/k.png"
                        width={50}
                        alt="logo.png"
                        className="p-1"
                      />
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-tag" to="skills">
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-tag" to="education">
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-tag" to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li className="d-none d-lg-block contact-btn py-1">
                  <Link
                    className="contact-me px-3 py- rounded-3 fw-regular link-tag"
                    to="contact"
                  >
                    <span className="text-black">Contact me</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      {/* <nav className="navbar nav-inner rounded-4 ">
          <div className="d-none d-lg-block">
            <div className="container justify-content-center d-flex align-items-center">
              <div className="navbar-nav">
                <div className="nav-link mx-4">
                  <a href="/">Home</a>
                </div>
                <div className="nav-link mx-4">
                  <a href="/">Profile</a>
                </div>
                <div className="nav-link mx-4">
                  <a href="/">Experience</a>
                </div>
              </div>
              <img src="assets/logo2.png" width={100} className="mx-5" />
              <div className="navbar-nav">
                <div className="nav-link mx-4">
                  <a href="/">Projects</a>
                </div>
                <div className="nav-link mx-4">
                  <a href="/">Skills</a>
                </div>
                <div className="nav-link mx-4">
                  <a href="/">Contact me</a>
                </div>
              </div>
            </div>
          </div>
        </nav> */}
    </>
  );
}
