const InfoCard = ({ icon, text }) => {
  return (
    <div className="infoCard py-3 py-md-4 px-1 px-md-4 text-center">
      <i className="icon color-primary">{icon}</i>
      <p className="text text-uppercase text-paragraph pt-1 pt-md-3 mb-0">
        {text}
      </p>
      <style jsx>{`
        .infoCard {
          max-width: 204px;
          /* max-height: 158px; */
          background-color: #fff;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          border-radius: 5px;
          transition: 0.5s;
        }

        .infoCard:hover {
          background-image: linear-gradient(
            250.35deg,
            #005ea2 0%,
            #25d3eb 84.45%
          );
          box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.08);
        }
        .infoCard:hover .icon,
        .text {
          color: #fff !important;
        }
        .infoCard:hover .text {
          color: #fff !important;
        }

        .icon {
          font-size: 35px;
          transition: 0.5s;
        }
        .text {
          background-image: linear-gradient(
            to left,
            #005ea2 0%,
            #25d3eb 84.45%
          );
          transition: 0.5s;
          background-clip: text !important;
          -webkit-background-clip: text !important;
          color: transparent !important;
        }

        @media screen and (max-width: 767px) {
          .infoCard {
            max-width: 110px;
            max-height: 77px;
          }
          .text-paragraph {
            font-size: 10px !important;

            line-height: 11px !important;
            letter-spacing: 0.055em !important;
          }
          .icon {
            font-size: 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default InfoCard;
