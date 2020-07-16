// components
import SectionHeading from "../heading/sectionHeading";
import InvestAmountCard from "../cards/investAmountCard";
import InvestDetailsCard from "../cards/investDetailsCard";

const InvestSection = () => {
  return (
    <>
      <section className="section-pt">
        <div className="container">
          <SectionHeading
            primaryHeading="A technology investment that pays off"
            secondaryHeading="Leading brands adopt digital-first capabilities"
            classList="text-center mx-auto"
          />

          <div className="col-12 p-0 mx-auto section-mt-md">
            <div className="row w-100 mx-auto">
              <div className="col-12 col-lg-6 d-flex align-items-center">
                {/* investment numbers */}
                <div className="row">
                  <div className="col-6 p-0">
                    <InvestAmountCard
                      paragraph="Increase in ecommerce conversion"
                      number="61"
                      icon="%"
                    />
                  </div>
                  <div className="col-6 p-0">
                    <InvestAmountCard
                      paragraph="Increase in ecommerce conversion"
                      number="61"
                      icon="%"
                    />
                  </div>
                  <div className="col-6 p-0">
                    <InvestAmountCard
                      paragraph="Increase in ecommerce conversion"
                      number="61"
                      icon="%"
                      classList="mt-4"
                    />
                  </div>
                  <div className="col-6 p-0">
                    <InvestAmountCard
                      paragraph="Increase in ecommerce conversion"
                      number="61"
                      icon="%"
                      classList="mt-4"
                    />
                  </div>
                </div>
              </div>
              {/* investment card */}
              <div className="col-12 col-lg-6 px-0 pt-5 mt-3 pt-lg-0 mt-lg-0">
                <InvestDetailsCard
                  imageUrl="/assets/images/nature.jpg"
                  title="Bang & Olufsen"
                  paragraph="How a high-end audio-visual company is making significant ecommerce gains with Contentful"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestSection;
