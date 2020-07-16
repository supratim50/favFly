const HelpCard = ({ heading, paragraph, classlist }) => {
  return (
    <div
      className={`help-card position-relative overflow-hidden p-3 p-lg-4 ${
        classlist ? classlist : ""
      }`}
    >
      <h3 className="secondary-heading-sm color-primary text-uppercase font-weight-bold mt-2 ml-2 mb-0">
        {heading}
      </h3>
      <p className="paragraph text-paragraph ml-2 mb-0 text-darkgray pt-3 mt-1">
        {paragraph}
      </p>
      <p className="get-start text-muted text-paragraph text-right mt-1 mb-0">
        Get Started &rarr;
      </p>
      <style jsx>{`
        .help-card {
          max-width: 397px;
          background: #ffffff;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          border-radius: 5px;
          transition: all 0.5s;
        }

        .help-card::before {
          content: "";
          width: 0px !important;
          height: 100% !important;
          border-radius: 30px;
          transition: 0.5s;

          position: absolute !important;
          left: 0;
          top: 0;
          background: linear-gradient(
            267.99deg,
            #25d3eb 28.97%,
            #005ea2 85.25%
          );
          z-index: 1;
        }

        .help-card:hover {
          box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.08);
        }
        .help-card:hover::before {
          width: 5px !important;
        }

        @media screen and (max-width: 991px) {
          .help-card {
            max-width: 100% !important;
          }
        }

        @media screen and (max-width: 767px) {
          .paragraph {
            font-size: 13px !important;
          }
          .get-start {
            font-size: 10px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HelpCard;
