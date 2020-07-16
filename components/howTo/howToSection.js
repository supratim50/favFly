import { FiCheck } from "react-icons/fi";
import Link from "next/link";
// component
import SectionHeading from "../heading/sectionHeading";
import PrimaryButton from "../buttons/primaryBtn";

const HowTo = () => {
  return (
    <section className="section-pt">
      <div className="container">
        <SectionHeading
          primaryHeading="How favFly works"
          secondaryHeading="Sub-text to be added here"
          classList="text-center mx-auto"
        />
        <div className="row mx-auto section-mt-md">
          <div className="col-12 col-md-6">
            <img className="w-100 h-100" src="/assets/images/howToSvg.svg" />
          </div>
          <div className="col-12 col-md-6">
            <div className="ml-auto" style={{ maxWidth: 475, width: "100%" }}>
              <p className="text-paragraph text-darkgray mt-5 mt-md-0 mb-5">
                Traditional CMSes were designed to create web pages. Contentful
                was purpose-built for creating omnichannel digital experiences.
                We help digital teams innovate, iterate and go to market faster
                with an agile, modern tech stack.
              </p>
              {/* ========= */}
              <div className="row mx-auto">
                <div className="col-1 px-0">
                  <i className="primary-heading color-primary">
                    <FiCheck />
                  </i>
                </div>
                <div className="col-11">
                  <p className="color-primary text-paragraph mb-0">
                    Unify content so it can be edited from a single hub
                  </p>
                </div>
              </div>
              {/* ========= */}
              <div className="row mx-auto mt-4 pt-0 mt-md-3 pt-md-3">
                <div className="col-1 px-0">
                  <i className="primary-heading color-primary">
                    <FiCheck />
                  </i>
                </div>
                <div className="col-11">
                  <p className="color-primary text-paragraph mb-0">
                    Structure it so it can be used in any digital channel
                  </p>
                </div>
              </div>
              {/* ========= */}
              <div className="row mx-auto mt-4 pt-0 mt-md-3 pt-md-3">
                <div className="col-1 px-0">
                  <i className="primary-heading color-primary">
                    <FiCheck />
                  </i>
                </div>
                <div className="col-11">
                  <p className="color-primary text-paragraph mb-0">
                    Integrate with hundreds of leading-edge tools for
                    translation, segmentation, ecommerce and more
                  </p>
                </div>
              </div>
              {/* button */}
              <Link href="/">
                <a className="text-decoratin-none text-center">
                  <PrimaryButton
                    text="See our features"
                    classList="mt-5 mx-auto"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .text-div {
          max-width: 385px;
        }
        @media screen and (max-width: 767px) {
          .text-div {
            max-width: 290px;
          }
        }
        @media screen and (max-width: 400px) {
          .text-div {
            max-width: 237px;
          }
        }
      `}</style>
    </section>
  );
};

export default HowTo;
