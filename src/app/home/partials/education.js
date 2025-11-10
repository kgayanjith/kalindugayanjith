export default function EducationPage() {
  return (
    <>
      <section>
        <div className="container">
          <div className="heading-wrapper text-center py-5 mt-4">
            <h2 className="section-heading text-white home-page__title">
              My Education
            </h2>
          </div>
          <div className="education-wrapper text-white">
            <div className="row ">
              <div className="col-lg-6 mb-4">
                <div className="edu-section px-4 py-3 h-100">
                  <div className="row align-items-center">
                    <div className="col-md-3 col-6 ps-0 ps-md-2">
                      <div className="logo-wrapper bg-white p-2 rounded-3 mb-4 mb-md-0">
                        <img src="assets/yural.png" className="w-100" alt="" />
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
                <div className="edu-section px-4 py-3 h-100">
                  <div className="row align-items-center">
                    <div className="col-md-3 col-6 ps-0 ps-md-2">
                      <div className="logo-wrapper bg-white p-2 rounded-3 mb-4 mb-md-0">
                        <img src="assets/dublin.jpg" className="w-100" alt="" />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="dec">
                        <p className="fs-5 fw-semibold mb-0">
                          BSc in (Hons) in Management Information Systems
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
                <div className="edu-section px-4 py-3 h-100">
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
    </>
  );
}
