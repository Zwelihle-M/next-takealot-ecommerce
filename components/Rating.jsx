import { FaStar, FaStarHalf } from "react-icons/fa";

function Rating(props) {
  const { rating, numReviews, caption } = props;

  return (
    <div className="rating flex gap-1">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 0.5;
        return (
          <span key={ratingValue}>
            {rating >= ratingValue ? (
              <FaStar style={{ color: "#FFD700" }} />
            ) : rating >= index + 0.25 ? (
              <FaStarHalf style={{ color: "#FFD700" }} />
            ) : (
              <FaStar style={{ color: "#C4C4C4" }} />
            )}
          </span>
        );
      })}
      {caption ? (
        <span>{caption}</span>
      ) : numReviews != 0 ? (
        <span>{"" + numReviews + " reviews"}</span>
      ) : (
        ""
      )}
    </div>
  );
}

export default Rating;


