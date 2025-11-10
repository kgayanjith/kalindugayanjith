"use client";

import { useEffect } from "react";

export default function keySkills() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  });
  return (
    <>
      <section>
        <div className="container">
          <div className="heading-wrapper text-center py-5 mt-4">
            <h2 className="section-heading text-white home-page__title">
              My Key Skills
            </h2>
          </div>
          <div className="skill-wrapper text-white">
            <div className="row text-center justify-content-around">
              <div className="col-md-5 mb-5">
                <p className="fs-5 fw-semibold">Frontend Development</p>
                <div className="row justify-content-center">
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img src="assets/vuejs.png" className="w-100" alt="" />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img src="assets/react.png" className="w-100" alt="" />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img src="assets/nextjs.png" className="w-100" alt="" />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img
                        src="assets/inertiajs.png"
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img
                        src="assets/js.png"
                        className="w-100 rounded-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img
                        src="assets/jquery.png"
                        className="w-100 h-100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mb-5">
                <p className="fs-5 fw-semibold">Backend & Intergration</p>
                <div className="row justify-content-center">
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img src="assets/laravel.png" className="w-100" alt="" />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img
                        src="assets/rest.png"
                        className="w-100 rounded-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img src="assets/axios.png" className="w-100" alt="" />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img
                        src="assets/postman.png"
                        className="w-100 rounded-circle"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img src="assets/python.png" className="w-100" alt="" />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img src="assets/c.png" className="w-100 h-100" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mb-5">
                <p className="fs-5 fw-semibold">UI / UX & Styling</p>
                <div className="row justify-content-center">
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img
                        src="assets/tailwindcss.png"
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2 h-200">
                    <div className="icon-wrapper p-3">
                      <img
                        src="assets/bootstrap.png"
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img
                        src="assets/materialui.png"
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img
                        src="assets/flowbite.png"
                        className="w-100 rounded-circle"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img src="assets/figma.png" className="w-100" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mb-5">
                <p className="fs-5 fw-semibold">Version Control & Other</p>
                <div className="row justify-content-center">
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img src="assets/git.png" className="w-100" alt="" />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2 h-200">
                    <div className="icon-wrapper p-3">
                      <img src="assets/github.png" className="w-100" alt="" />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img src="assets/gitlab.png" className="w-100" alt="" />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img
                        src="assets/cicd.png"
                        className="w-100 rounded-circle"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
                      <img
                        src="assets/agile.png"
                        className="w-100 rounded-circle"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-3 mb-4 mb-lg-2">
                    <div className="icon-wrapper p-3">
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
      </section>
    </>
  );
}
