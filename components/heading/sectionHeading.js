const SectionHeading = ({ primaryHeading, secondaryHeading, classList }) => {
  return (
    <div>
      <h2
        className={`primary-heading text-darkgray font-weight-bold mb-0 ${
          classList ? classList : ""
        }`}
      >
        {primaryHeading && primaryHeading}
      </h2>
      <p
        className={`text-paragraph w-75 text-muted pt-4 mt-md-2 mb-0 ${
          classList ? classList : ""
        }`}
      >
        {secondaryHeading && secondaryHeading}
      </p>
    </div>
  );
};

export default SectionHeading;
