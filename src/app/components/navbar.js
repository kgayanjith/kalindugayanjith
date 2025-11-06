export default function Navbar() {
  return (
    <>
      <section
        className="d-flex justify-content-center position-fixed nav-wrapper mt-md-3"
        style={{ top: 0, right: 0, left: 0, zIndex: 10000 }}
      >
        <nav className="navbar nav-inner rounded-4">
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
        </nav>
      </section>
    </>
  );
}
