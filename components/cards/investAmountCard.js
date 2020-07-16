const InvestAmount = ({ paragraph, number, icon, classList }) => {
  return (
    <div
      className={`p-3 p-lg-4 mx-auto investCard ${classList ? classList : ""}`}
    >
      <p className="secondary-heading-sm text-darkgray mb-0 mt-lg-1">
        {paragraph}
      </p>
      <h1 className="investAmount color-primary mt-3 mb-0 font-weight-bold text-center">
        {number} <span className="icon">{icon}</span>
      </h1>

      <style jsx>{`
        .investCard {
          max-width: 221px;
          max-height: 166px;
          background: #ffffff;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .investAmount {
          font-size: 52px !important;
          line-height: 63px;
        }
        .icon {
          font-size: 25px !important;
        }

        @media screen and (max-width: 767px) {
          .investCard {
            max-width: 154px;
            max-height: 115px;
          }
          .investAmount {
            font-size: 36px !important;
          }
          .icon {
            font-size: 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default InvestAmount;
