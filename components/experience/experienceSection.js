// conponent
import SectionHeading from "../heading/sectionHeading";
import ExperienceCard from "../cards/experienceCard";

const ExperienceSection = () => {
  return (
    <section className="section-pt">
      <div className="container">
        <SectionHeading
          primaryHeading="Let’s build better digital experiences together"
          secondaryHeading="See how favFly empowers leading companies"
          classList="text-center mx-auto"
        />

        {/* <div className="col-11 mx-auto"> */}
        <div className="row mx-auto section-mt-md">
          <div className="col-12 col-lg-4 col-sm-6 mt-4 mt-lg-0">
            <ExperienceCard
              imageUrl="/assets/images/experience.png"
              text="The seven dimension of scale"
            />
          </div>
          <div className="col-12 col-lg-4 col-sm-6 mt-4 mt-lg-0">
            <ExperienceCard
              imageUrl="/assets/images/experience.png"
              text="The ultimate guide to headlesss CMS"
            />
          </div>
          <div className="col-12 col-lg-4 col-sm-6 mt-4 mt-lg-0">
            <ExperienceCard
              imageUrl="/assets/images/experience.png"
              text="The modern website strategy"
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default ExperienceSection;
