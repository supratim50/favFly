import SectionHeading from "../heading/sectionHeading";
import HelpCard from "../cards/helpCard";

const HelpSection = () => {
  return (
    <>
      <section className="section-pt">
        <div className="container">
          <SectionHeading
            primaryHeading="How favfly will help you grow faster"
            secondaryHeading="Leading brands adopt digital-first capabilities"
            classList="text-center mx-auto"
          />

          <div className="col-12 col-lg-9 p-0 section-mt-md mx-auto d-flex justify-content-between flex-wrap">
            <div className="row">
              <div className="col-12 col-lg-6">
                <a href="/" className="text-decoration-none">
                  <HelpCard
                    heading="For Business and Digital Leaders"
                    paragraph="Accelerate building digital experiences with a content
                  platform that delivers at enterprise scale."
                  />
                </a>
              </div>
              <div className="col-12 col-lg-6">
                <a href="/" className="text-decoration-none">
                  <HelpCard
                    heading="For Business and Digital Leaders"
                    paragraph="Accelerate building digital experiences with a content
                  platform that delivers at enterprise scale."
                    classlist="mt-4 mt-lg-0"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <a href="/" className="text-decoration-none">
                  <HelpCard
                    heading="For Business and Digital Leaders"
                    paragraph="Accelerate building digital experiences with a content
                  platform that delivers at enterprise scale."
                    classlist="mt-4 mt-lg-5"
                  />
                </a>
              </div>
              <div className="col-12 col-lg-6">
                <a href="/" className="text-decoration-none">
                  <HelpCard
                    heading="For Business and Digital Leaders"
                    paragraph="Accelerate building digital experiences with a content
                  platform that delivers at enterprise scale."
                    classlist="mt-4 mt-lg-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpSection;
