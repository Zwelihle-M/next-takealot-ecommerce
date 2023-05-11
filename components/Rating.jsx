import { FaStar, FaStarHalf } from "react-icons/fa";

function Rating(props) {
  const { rating, numReviews, caption } = props;

  return (
    <div className="rating flex gap-1">
      <span>
        {rating >= 1 ? (
          <FaStar style={{ color: "#FFD700" }} />
        ) : rating >= 0.5 ? (
          <FaStarHalf style={{ color: "#FFD700" }} />
        ) : (
          <FaStar style={{ color: "#FFD700" }} />
        )}
      </span>
      <span>
        {rating >= 2 ? (
          <FaStar style={{ color: "#FFD700" }} />
        ) : rating >= 1.5 ? (
          <FaStarHalf style={{ color: "#FFD700" }} />
        ) : (
          <FaStar style={{ color: "#FFD700" }} />
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <FaStar style={{ color: "#FFD700" }} />
        ) : rating >= 2.5 ? (
          <FaStarHalf style={{ color: "#FFD700" }} />
        ) : (
          <FaStar style={{ color: "#FFD700" }} />
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <FaStar style={{ color: "#FFD700" }} />
        ) : rating >= 3.5 ? (
          <FaStarHalf style={{ color: "#FFD700" }} />
        ) : (
          <FaStar style={{ color: "#FFD700" }} />
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <FaStar style={{ color: "#FFD700" }} />
        ) : rating >= 4.5 ? (
          <FaStarHalf style={{ color: "#FFD700" }} />
        ) : (
          <FaStar style={{ color: "#FFD700" }} />
        )}
      </span>
      {caption ? (
        <span>{caption}</span>
      ) : numReviews != 0 ? (
        <span>{"" + numReviews + "reviews"}</span>
      ) : (
        ""
      )}
    </div>
  );
}

export default Rating;
