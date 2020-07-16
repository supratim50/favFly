import PrimaryBtn from "../buttons/primaryBtn";

const InfoDetailsCard = ({ classList }) => {
  return (
    <div
      className={`card border-0 overflow-hidden ${classList ? classList : ""}`}
    >
      <img className="card-img-top w-100" src="/assets/images/nature.jpg" />
      <div className="card-body p-4">
        <h2 className="card-title font-weight-bold text-primary mb-0">
          Intercom dramatically reduces website deployment time
        </h2>
        <p className="text-paragraph text-darkgray mt-4 mb-0">
          Agile teams ship faster when content is treated like code. Say goodbye
          to your website backlog. There can more text or paraghraph texts here
          below.
        </p>
        <PrimaryBtn text="Know More" classList="mt-4" />
      </div>
      <style jsx>{`
        .card {
          max-width: 782px !important;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .card-img-top {
          max-height: 295px;
          box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.08);
        }
        .card-title {
          font-size: 18px;
        }
        @media screen and (max-width: 767px) {
          .card-title {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default InfoDetailsCard;
