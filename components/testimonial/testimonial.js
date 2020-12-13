import { FaPlay } from "react-icons/fa";
// components
import SectionHeading from "../heading/sectionHeading";

const Testimonial = () => {
  return (
    <section className="section-pt">
      <div className="container">
        <SectionHeading
          primaryHeading="What people think about us!"
          secondaryHeading="Have a look to these sweet comments our loyal customers say"
          classList="text-center mx-auto"
        />

        <div className="col-12 col-lg-9 mx-auto section-mt-md testimonial-box px-0 overflow-hidden mb-5">
          <div className="row mx-auto">
            <div className="col-4 px-0">
              <img
                className="w-100 testimonial-img"
                src="/assets/images/testimonial.jpg"
              />
            </div>
            <div className="col-8 px-0 p-4">
              <h2 className="text-paragraph text-uppercase text-darkgray font-weight-bold px-3 py-2 mb-0">
                Intercom dramatically reduces website deployment time
              </h2>
              <p className="mt-3 text-paragraph text-muted px-3">
                Traditional CMSes were designed to create web pages. Contentful
                was purpose-built for creating omnichannel digital experiences.
                We help digital teams innovate, iterate and go to market faster
                with an agile, modern tech stack.{" "}
                <a
                  href="/"
                  className="font-weight-bold color-primary text-decoration-none"
                >
                  Read More
                </a>
              </p>
              <p
                href="/"
                className="text-paragraph font-weight-bold color-primary text-decoration-none px-3 mt-5 mb-0"
              >
                Play Video &nbsp;
                <span>
                  <FaPlay />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .testimonial-box {
          max-height: 276px;
          background: #ffffff;
          /* CardShadow */
          box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .testimonial-img {
          /* max-width: 234px; */
          max-height: 276px;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
