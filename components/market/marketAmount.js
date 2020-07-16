const MarketAmount = ({
  primaryHeading,
  secondaryHeading,
  icon,
  classList,
}) => {
  return (
    <div>
      <h2
        className={`primary-heading text-primary font-weight-bold mb-0 ${
          classList ? classList : ""
        }`}
      >
        {icon && icon}&nbsp; &nbsp;{primaryHeading && primaryHeading}
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

export default MarketAmount;
