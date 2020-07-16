import React from "react";
import { FaPlay } from "react-icons/fa";

// copmponents
import PrimaryBtn from "../buttons/primaryBtn";
import SecondaryBtn from "../buttons/secondaryBtn";

const HeroSection = () => {
  return (
    <section className="hero-section position-relative overflow-hidden">
      <div className="container">
        <div className="row w-100 ml-0">
          {/* 1st col */}
          <div className="col-12 col-lg-6 p-0">
            {/* heading */}
            <div className="heading-box">
              <h1 className="hero-heading text-white font-weight-bold mb-0">
                Grow your business with favCMS
              </h1>
            </div>
            {/* heading end */}
            {/* paragraph */}
            <div style={{ maxWidth: 404 }}>
              <p className="text-paragraph text-white mb-0 mt-3 pt-3 pt-lg-4">
                It’s the modern way to manage content: Control all content from
                a single hub. Publish to any channel. Integrate hundreds of
                tools with our industry-leading app framework.
              </p>
            </div>
            {/* paragragh end */}
            <div className="pt-5 d-flex">
              <PrimaryBtn text="Get Started" />
              <SecondaryBtn text="How It Works" classList="ml-3 ml-lg-2" />
            </div>
          </div>
          <div className="col-12 col-lg-6 p-0 d-flex justify-content-center justify-content-lg-end align-items-center">
            <div className="video-box overflow-hidden position-relative mt-5 mt-lg-0">
              {/* <iframe
                style={{ width: "100%", height: "100%" }}
                src="https://www.youtube.com/embed/-2LtZRi6Q0s"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe> */}
              <img src="/assets/images/nature.jpg" style={{ width: "100%" }} />
              <div className="paly-btn bg-color-white rounded-circle position-absolute d-flex justify-content-center align-items-center">
                <i className="play-icon">
                  <FaPlay />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="wave position-absolute w-100"
        src="/assets/images/wave.svg"
      />
      <style jsx>{`
        .container {
          padding-top: 142px;
          padding-bottom: 142px;
        }

        @media screen and (max-width: 991px) {
          .container {
            padding-top: 58px;
            padding-bottom: 100px;
          }
        }

        .hero-section {
          background-image: linear-gradient(
            254.54deg,
            #25d3eb 0%,
            #005ea2 84.45%
          );
        }

        .heading-box {
          max-width: 291px;
        }

        @media screen and (max-width: 991px) {
          .heading-box {
            max-width: 100%;
          }
        }

        .hero-heading {
          font-size: 44px;
          line-height: 53px;
          letter-spacing: 2px;
        }

        @media screen and (max-width: 991px) {
          .hero-heading {
            font-size: 30px;
            line-height: 36px;
          }
        }

        .video-box {
          max-width: 522.23px;
          max-height: 304px;
          /* width: 522.23px;
          height: 304px; */
          box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
        }

        @media screen and (max-width: 991px) {
          .video-box {
            max-width: 100%;
            max-height: 741px;
          }
        }

        .paly-btn {
          width: 82px;
          height: 82px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        @media screen and (max-width: 991px) {
          .paly-btn {
            width: 50px;
            height: 50px;
          }
        }

        .play-icon {
          color: #00a7da;
          font-size: 28px;
        }
        @media screen and (max-width: 991px) {
          .play-icon {
            font-size: 18px;
          }
        }

        .wave {
          bottom: -162px;
          left: 0;
        }
        @media screen and (max-width: 1334px) {
          .wave {
            bottom: -112px;
          }
        }
        @media screen and (max-width: 934px) {
          .wave {
            bottom: -82px;
          }
        }
        @media screen and (max-width: 685px) {
          .wave {
            bottom: -50px;
          }
        }
        @media screen and (max-width: 436px) {
          .wave {
            bottom: -30px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
