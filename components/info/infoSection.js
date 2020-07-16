import { FiLayers, FiMinimize, FiLoader } from "react-icons/fi";

// components
import SectionHeading from "../heading/sectionHeading";
import InfoDetailsCard from "../cards/infoDetailsCard";
import InfoCard from "../cards/infoCard";

const Info = () => {
  return (
    <section className="section-pt">
      <div className="container">
        <SectionHeading
          primaryHeading="Some texts to be added here"
          secondaryHeading="Sub-text to be added here"
          classList="text-center mx-auto"
        />
        <div className="row w-100 mx-auto section-mt-md">
          <div className="col-12 col-lg-3 mt-4 mt-lg-0 p-0 order-2">
            <div className="h-100 d-flex flex-lg-column flex-row justify-content-between mx-auto">
              <InfoCard icon={<FiLayers />} text="modern stack website" />
              <InfoCard icon={<FiMinimize />} text="Content hub" />
              <InfoCard icon={<FiLoader />} text="ONSITE EXPERIENCES" />
            </div>
          </div>
          <div className="col-12 col-lg-9 p-0 order-1 order-lg-2">
            <div className="card-box">
              <InfoDetailsCard classList="ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
