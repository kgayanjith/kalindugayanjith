"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ContributionPage() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="heading-wrapper text-center py-5 mt-4">
            <h2 className="section-heading text-white home-page__title">
              My Contributions
            </h2>
          </div>
          <div className="contribution-wrapper pb-3">
            <Carousel responsive={responsive} showDots={true}>
              <div className="mx-2 h-100">
                <div className="wrapper-slider rounded-4 p-4 h-100">
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-4">
                      <div className="image-3d">
                        <img src="assets/yanko.png" className="w-100" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="item-des text-white text-center pt-3">
                    <p className="fs-5 fw-semibold mb-0">Yanko.lk Dashboard</p>
                    <span className="badge border">
                      Plexxas Solutions (Pvt) Ltd (Freelance)
                    </span>

                    <p className="pt-3">
                      Enhanced and optimized the admin dashboard of a vehicle
                      booking system, improving UI responsiveness, user
                      experience, and management efficiency for bookings,
                      drivers, and vehicles.
                    </p>
                    <div className="tech-stack pt-2">
                      <i className="fa-brands fa-laravel fs-3 me-3"></i>
                      <i className="fa-solid fa-database fs-3 me-3"></i>
                      <i className="fa-brands fa-bootstrap fs-3 me-3"></i>
                      <i className="fa-brands fa-css3 fs-3 me-3"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-2 h-100">
                <div className="wrapper-slider rounded-4 p-4 h-100">
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-4">
                      <div className="image-3d">
                        <img src="assets/yummy.png" className="w-100" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="item-des text-white text-center pt-3">
                    <p className="fs-5 fw-semibold mb-0">Yummygle</p>
                    <span className="badge border">
                      Weblook International (Pvt) Ltd
                    </span>

                    <p className="pt-3">
                      Yummygle is a SaaS-based global food delivery platform
                      enabling customers to order from diverse restaurants,
                      track deliveries in real-time, and make secure payments,
                      while vendors manage menus, orders, and operations
                      seamlessly.
                    </p>
                    <div className="tech-stack pt-2">
                      <i className="fa-brands fa-laravel fs-3 me-3"></i>
                      <i className="fa-brands fa-bootstrap fs-3 me-3"></i>
                      <i className="fa-brands fa-vuejs fs-3 me-3"></i>
                      <i className="fa-solid fa-database fs-3 me-3"></i>
                      <i className="fa-brands fa-js fs-3 me-3"></i>
                      <i className="fa-brands fa-css3 fs-3 me-3"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-2 h-100">
                <div className="wrapper-slider rounded-4 p-4 h-100">
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-4">
                      <div className="image-3d">
                        <img
                          src="assets/animera.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item-des text-white text-center pt-3">
                    <p className="fs-5 fw-semibold mb-0">
                      Animera Pet Care System
                    </p>
                    <span className="badge border">Freelance</span>

                    <p className="pt-3">
                      Developed a comprehensive PetCare management system that
                      allows users to register, track, and manage their pets’
                      health records, appointments, and daily care activities.
                      The system streamlines pet information management for both
                      owners and veterinarians, enhancing convenience and care
                      efficiency.
                    </p>
                    <div className="tech-stack pt-2">
                      <i className="fa-brands fa-laravel fs-3 me-3"></i>
                      <i className="fa-brands fa-bootstrap fs-3 me-3"></i>
                      <i className="fa-brands fa-vuejs fs-3 me-3"></i>
                      <i className="fa-solid fa-database fs-3 me-3"></i>
                      <i className="fa-brands fa-js fs-3 me-3"></i>
                      <i className="fa-brands fa-css3 fs-3 me-3"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-2 h-100">
                <div className="wrapper-slider rounded-4 p-4 h-100">
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-4">
                      <div className="image-3d">
                        <img
                          src="assets/saptify.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item-des text-white text-center pt-3">
                    <p className="fs-5 fw-semibold mb-0">Saptify</p>
                    <span className="badge border">
                      Weblook International (Pvt) Ltd
                    </span>

                    <p className="pt-3">
                      Designed and developed a responsive vendor management web
                      app for Sapitfy, creating a user-friendly UI with React,
                      Tailwind CSS, and MUI, and integrating it with back-end
                      APIs to ensure smooth performance and enhanced user
                      experience.
                    </p>
                    <div className="tech-stack pt-2">
                      <i className="fa-brands fa-react fs-3 me-3"></i>
                      <i className="fa-solid fa-database fs-3 me-3"></i>
                      <i className="fa-brands fa-js fs-3 me-3"></i>
                      <i className="fa-brands fa-css3 fs-3 me-3"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-2 h-100">
                <div className="wrapper-slider rounded-4 p-4 h-100">
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-4">
                      <div className="image-3d">
                        <img
                          src="assets/lanka_layouts.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item-des text-white text-center pt-3">
                    <p className="fs-5 fw-semibold mb-0">Lanka Layouts</p>
                    <span className="badge border">Freelance</span>

                    <p className="pt-3">
                      Developed a website for an electrical engineering drawing
                      service company in Sri Lanka, highlighting their projects
                      and services, and integrated EmailJS for easy, direct
                      client inquiries through the contact form.
                    </p>
                    <div className="tech-stack pt-2">
                      <i className="fa-brands fa-bootstrap fs-3 me-3"></i>
                      <i className="fa-brands fa-react fs-3 me-3"></i>
                      <i className="fa-brands fa-js fs-3 me-3"></i>
                      <i className="fa-brands fa-css3 fs-3 me-3"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-2 h-100">
                <div className="wrapper-slider rounded-4 p-4 h-100">
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-4">
                      <div className="image-3d">
                        <img src="assets/nikoba.png" className="w-100" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="item-des text-white text-center pt-3">
                    <p className="fs-5 fw-semibold mb-0">Nikoba</p>
                    <span className="badge border">
                      Weblook International (Pvt) Ltd
                    </span>

                    <p className="pt-3">
                      Developed Nikoba.com, a web-based vehicle auction platform
                      connecting Sri Lankan users with Japanese auctions,
                      enabling secure real-time bidding and seamless
                      international vehicle trading.
                    </p>
                    <div className="tech-stack pt-2">
                      <i className="fa-brands fa-laravel fs-3 me-3"></i>
                      <i className="fa-brands fa-bootstrap fs-3 me-3"></i>
                      <i className="fa-brands fa-vuejs fs-3 me-3"></i>
                      <i className="fa-solid fa-database fs-3 me-3"></i>
                      <i className="fa-brands fa-js fs-3 me-3"></i>
                      <i className="fa-brands fa-css3 fs-3 me-3"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-2 h-100">
                <div className="wrapper-slider rounded-4 p-4 h-100">
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-4">
                      <div className="image-3d">
                        <img src="assets/foodzy.png" className="w-100" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="item-des text-white text-center pt-3">
                    <p className="fs-5 fw-semibold mb-0">Foodzy</p>
                    <span className="badge border">Freelance</span>

                    <p className="pt-3">
                      Designed a modern food delivery app in Figma, focusing on
                      intuitive navigation, visually appealing UI, and a
                      seamless ordering experience for users.
                    </p>
                    <div className="tech-stack pt-2">
                      <i className="fa-brands fa-figma fs-3"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
