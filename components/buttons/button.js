import React from "react";

const Button = ({ text, classList }) => {
  return (
    <div className={`button py-3 text-center ${classList ? classList : ""}`}>
      <p className="m-0 text-primary text-paragraph">{text}</p>
      <style jsx>{`
        .button {
          max-width: 195px;
          border-radius: 5px;
          background: #ffffff;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          transition: 0.5s;
        }
        .button:hover {
          background: #00a7da;
          box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.25);
          color: #fff !important;
        }
        .button:hover p {
          color: #fff !important;
        }
      `}</style>
    </div>
  );
};

export default Button;
