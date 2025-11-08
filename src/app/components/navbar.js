import { tr } from "framer-motion/client";

export default function Navbar() {
  return (
    <>
      <section
        className="position-fixed nav-wrapper mt-lg-3 w-100 justify-content-center"
        style={{ top: 0, right: 0, left: 0, zIndex: 10000, background:"transparent" }}
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
            <span className="d-lg-none py-2"><img src="assets/logo2.png" width={100} alt="" /></span>
            <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
              <ul className="navbar-nav d-flex rounded-4 px-5 py-1 gap-3 align-items-center">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                   Experience
                  </a>
                </li>
                <li className="nav">
                  <a className="nav-link" href="/">
                    <span><img src="assets/logo2.png" width={100} alt="" /></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                     Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact me
                  </a>
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
