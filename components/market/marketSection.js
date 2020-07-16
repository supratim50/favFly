import Link from "next/link";
import { FiPackage, FiSend } from "react-icons/fi";
// components
import SectionHeading from "../heading/sectionHeading";
import MarketAmount from "../market/marketAmount";
import Button from "../buttons/button";

const MarketSection = () => {
  return (
    <section className="section-pt">
      <div className="container">
        <div className="row mx-auto">
          <div className="col-12 col-md-6">
            <SectionHeading
              primaryHeading="Why favFly is the market leader"
              secondaryHeading="Sub-text to be added here"
              classList="text-center text-md-left mx-auto mx-md-0"
            />

            <Link href="/">
              <a className="text-decoration-none">
                <Button
                  text="Market leadership"
                  classList="mt-5 text-capitalize mx-auto mx-md-0"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="text-decoration-none">
                <Button
                  text="Analyst Validation"
                  classList="mt-4 text-capitalize mx-auto mx-md-0"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="text-decoration-none">
                <Button
                  text="Customer Metrics"
                  classList="mt-4 text-capitalize mx-auto mx-md-0"
                />
              </a>
            </Link>
          </div>
          <div className="marketAmountBox col-12 col-md-6 d-flex align-items-center mt-5 mt-md-0 pt-2 pt-md-0">
            <div className="row mx-auto">
              <div className="col-6 px-2">
                <MarketAmount
                  icon={<FiSend />}
                  primaryHeading="2000"
                  secondaryHeading="succesful customers"
                  classList="text-center mx-auto"
                />
              </div>
              <div className="col-6 px-2">
                <MarketAmount
                  icon={<FiPackage />}
                  primaryHeading="2000"
                  secondaryHeading="succesful customers"
                  classList="text-center mx-auto"
                />
              </div>
              <div className="col-6 px-2">
                <MarketAmount
                  icon={<FiSend />}
                  primaryHeading="2000"
                  secondaryHeading="succesful customers"
                  classList="text-center mx-auto mt-5"
                />
              </div>
              <div className="col-6 px-2">
                <MarketAmount
                  icon={<FiPackage />}
                  primaryHeading="2000"
                  secondaryHeading="succesful customers"
                  classList="text-center mx-auto mt-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .marketAmountBox {
          background-image: url(/assets/images/Vector.svg);
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </section>
  );
};

export default MarketSection;
