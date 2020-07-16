import React from "react";

const PrimaryBtn = ({ text, classList }) => {
  return (
    <>
      <div
        className={`btn-box py-3 bg-color-secondary d-inline-block ${
          classList ? classList : ""
        }`}
      >
        <div className="btn-text text-center text-decoration-none">{text}</div>
      </div>
      <style jsx>{`
        .btn-box {
          padding-left: 30px;
          padding-right: 30px;
          transition: all 0.5s;
          text-align: center;
          border-radius: 5px;
          border: 2px solid #ffd43c;
          /* hover */
          cursor: pointer;
        }

        .btn-text {
          font-size: 14px;
          line-height: 139.31%;
          transition: all 0.5s;

          /* identical to box height, or 21px */
          letter-spacing: 0.05em;

          /* TextBody */
          color: #434343 !important;
        }

        .btn-box:hover {
          background-color: transparent !important;
        }
        .btn-box:hover .btn-text {
          color: #ffd43c !important;
        }
      `}</style>
    </>
  );
};

export default PrimaryBtn;
