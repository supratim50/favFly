import React from "react";

const SecondaryBtn = ({ text, classList }) => {
  return (
    <>
      <div
        className={`secondary-btn py-3 d-inline-block ${
          classList ? classList : ""
        }`}
      >
        <a className="btn-text text-center text-decoration-none">{text}</a>
      </div>
      <style jsx>{`
        .secondary-btn {
          padding-left: 30px;
          padding-right: 30px;
          transition: all 0.5s;
          border-radius: 5px;
          border: 2px solid #fff;

          /* hover */
          cursor: pointer !important;
        }

        .btn-text {
          font-size: 15px;
          line-height: 139.31%;
          text-align: center;
          letter-spacing: 0.05em;
          transition: all 0.5s;
          color: #fff !important;
        }

        .secondary-btn:hover {
          background-color: #fff !important;
        }

        .secondary-btn:hover .btn-text {
          color: #434343 !important;
        }
      `}</style>
    </>
  );
};

export default SecondaryBtn;
