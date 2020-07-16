import SectionHeading from "../heading/sectionHeading";
const TrustSection = () => {
  return (
    <section className="section-pt">
      <div className="container">
        <SectionHeading
          primaryHeading="Who believe in us..."
          secondaryHeading="You’ll be in great company with the world’s leading brands"
          classList="text-center mx-auto"
        />
        {/* company */}
        <div className="company-outer-box section-mt-md w-100 py-lg-5 py-4">
          <div className="company-box d-flex justify-content-start align-items-center">
            <img
              src="/assets/images/comImg1.png"
              alt="Company"
              className="com-image"
            />
            <img
              src="/assets/images/comImg3.png"
              alt="Company"
              className="com-image"
            />
            <img
              src="/assets/images/comImg2.png"
              alt="Company"
              className="com-image"
            />
            <img
              src="/assets/images/comImg4.png"
              alt="Company"
              className="com-image"
            />
            <img
              src="/assets/images/comImg5.png"
              alt="Company"
              className="com-image"
            />
            <img
              src="/assets/images/comImg5.png"
              alt="Company"
              className="com-image"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .company-outer-box {
          max-height: 130px;
          background: #ffffff;
          padding-left: 67px;
          padding-right: 67px;

          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.02);
          border-radius: 8px;
        }

        @media screen and (max-width: 767px) {
          .company-outer-box {
            max-height: 100px;
            padding-left: 33px;
            padding-right: 33px;
          }
        }

        .company-outer-box::-moz-scrollbar {
          display: none !important;
        }
        .company-outer-box::-webkit-scrollbar {
          display: none !important;
        }
        .company-outer-box::-ms-scrollbar {
          display: none !important;
        }

         {
          /* .company-box::-moz-scrollbar {
          display: none !important;
        }
        .company-box::-webkit-scrollbar {
          display: none !important;
        }
        .company-box::-ms-scrollbar {
          display: none !important;
        } */
        }

        .company-box,
        .company-outer-box {
          overflow-x: auto !important;
        }

        .com-image {
          max-width: 127px;
          max-height: 40px;
        }
        .com-image:not(:first-child) {
          margin-left: 80px;
        }

        @media screen and (max-width: 767px) {
          .com-image {
            max-width: 90px;
            max-height: 30px;
          }
          .com-image:not(:first-child) {
            margin-left: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustSection;
