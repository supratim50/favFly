import Link from "next/link";

const InvestDetailsCard = ({ imageUrl, paragraph, title }) => {
  return (
    <div className="card border-0 mx-auto overflow-hidden">
      <img className="card-img-top" src={imageUrl} />
      <div className="card-body">
        <h2 className="card-title secondary-heading-sm color-primary text-uppercase font-weight-bold mb-0">
          {title}
        </h2>
        <p className="text-paragraph text-darkgray pt-3 mt-1 mb-1">
          {paragraph}
        </p>
        <Link href="/">
          <a className="text-decoration-none">
            <p className="read-more text-muted text-uppercase text-right mt-3">
              Read more
            </p>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .card {
          width: 397px !important;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        @media screen and (max-width: 767px) {
          .card {
            width: 100% !important;
          }
        }

        .card-img-top {
          /* max-height: 269px; */
          height: 269px;
        }
        .read-more {
          font-size: 13px;
        }
        @media screen and (max-width: 767px) {
          .read-more {
            font-size: 10px;
          }
          .text-paragraph {
            font-size: 13px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default InvestDetailsCard;
