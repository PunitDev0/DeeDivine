import React from "react";

const BannerSection = ({ countdown }) => {
  return (
    <>
      {/* News Ticker Section */}
      <div className="news-tricker">
        <marquee width="100%" direction="left" height="100px">
          ATTENTION REGISTRATION OPEN !!!! Book Your Shop under Affordable
          Housing Policy 2013 for Aranya Greens *** 33% Quota Reserved for Women
          *** 33% Quota Reserved under Government Category *** UNIT ALLOTMENT
          DATE 18 December 2025 *** LAST DATE OF APPLICATION 14 December 2025 ***
          Registration Amount is Fully Refundable for Unsuccessful Applicants
          Within 14 Working Days
        </marquee>  
      </div>
      {/* Banner Section */}
      <section className="bnr-section">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-3">
              <div className="col-md-12">
                <div className="one-sec">
                  <span>
                    <p>Last Date of Registration - 14 December 2025</p>
                  </span>
                </div>
                {/* Countdown Timer */}
                 <div className="two-sec scond">
                  <div id="timer" className="flex-wrap d-flex justify-content-center text-center">
                    <p className="text-success fw-bold text-red-600">Registration Closes in</p>
                    <div>
                      <span>{countdown.days} Days </span>
                      <span>{countdown.hours} Hours </span>
                      <span>{countdown.minutes} Minutes </span>
                      <span>{countdown.seconds} Seconds</span>
                    </div>
                  </div>
                </div>
                <div className="one-sec trd">
                  <span>
                    <a
                      href="images/AaranyaGreenSonipat35PriceList.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Attractive Payment Plan
                    </a>
                  </span>
                </div>
                <div className="one-sec">
                  <span>
                    <a href="javascript:void(0)">Loan Facility Available</a>
                  </span>
                </div>
                <div className="one-sec trd">
                  <span>
                    <p>Date of Allotment - 27 November 2025</p>
                  </span>
                </div>
              </div>
            </div>
            {/* Middle Column - Carousel */}
            <div className="col-md-6 text-center text-bold">
               <h1>DEEN DAYAL JAN AWAS YOJNA</h1>
              <h5> (Under Haryana Governement DTCP)</h5>
              <div className="carousel-wrapper">
                {/* Overlay Image */}
                <img
                  src="images/rera-logo.png"
                  alt="Overlay"
                  className="carousel-overlay-img"
                />
                {/* Bootstrap Carousel */}
                <div
                  id="bannerCarousel"
                  className="carousel slide bnr-img h-full"
                  data-bs-ride="carousel"
                >
                  {/* Indicators */}
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#bannerCarousel"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#bannerCarousel"
                      data-bs-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#bannerCarousel"
                      data-bs-slide-to="2"
                    ></button>
                  </div>
                  {/* Slides */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/images/banner.jpg"
                        className="d-block w-100 h-[420px] object-cover"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/images/banner1.jpg"
                        className="d-block w-100 h-[420px] object-cover"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/images/banner2.jpg"
                        className="d-block w-100 h-[420px] object-cover"
                        alt="Slide 3"
                      />
                    </div>
                  </div>

                  {/* Controls */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#bannerCarousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#bannerCarousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="col-md-3">
              <div className="col-md-12">
                <div className="one-sec">
                  <span>
                    <p>HRERA-PKL-SP-741-2025 dated on 11.08.2025</p>
                  </span>
                </div>
                <div className="two-sec scond click_pad">
                  <p>
                    <span>
                      <i className="fa fa-check-double"></i>
                    </span>{" "}
                    Click to View RERA Certificate{" "}
                    <a
                      href="/images/rera.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red blink-soft"
                    >
                      <i className="fa-solid fa-arrow-right"></i> Click Here
                    </a>
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-check-double"></i>
                    </span>{" "}
                    Click to View Brochure{" "}
                    <a
                      href="/images/brochure.jpeg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red blink-soft"
                    >
                      <i className="fa-solid fa-arrow-right"></i> Click Here
                    </a>
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-check-double"></i>
                    </span>{" "}
                    Click to View Grasso License{" "}
                    <a
                      href="/images/RritamrealityGrassoLicense.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red blink-soft"
                    >
                      <i className="fa-solid fa-arrow-right"></i> Click Here
                    </a>
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-check-double"></i>
                    </span>{" "}
                    Click to View Price List{" "}
                    <a
                      href="/images/pricelist.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red blink-soft"
                    >
                      <i className="fa-solid fa-arrow-right"></i> Click Here
                    </a>
                  </p>
                </div>
                <div className="one-sec trd">
                  <span>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Total No. of Plots : 30 Plots
                    </a>
                  </span>
                </div>
                <div className="one-sec">
                  <span>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Payment Plan : 10 : 40 : 30 : 20
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BannerSection;