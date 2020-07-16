const ExperienceCard = ({ text, imageUrl }) => {
  return (
    <div className="image-box mx-auto overflow-hidden position-relative">
      <img className="image w-100 h-auto" src={imageUrl} />
      <div className="title-box position-absolute w-100 p-4">
        <p className="title text-paragraph font-weight-bold text-white mb-0">
          {text}
        </p>
      </div>
      <style jsx>{`
        .image-box {
          max-width: 340px;
          border-radius: 15px;
        }
        .title-box {
          left: 0;
          bottom: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8),
            rgba(196, 196, 196, 0)
          );
        }
      `}</style>
    </div>
  );
};

export default ExperienceCard;
