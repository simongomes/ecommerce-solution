import { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import ReviewItem from "./review-item";
import { setProductReviews } from "@/store/thunks/product-thunks";

type ReviewsProps = {
  productId: string;
};

const Reviews: FC<ReviewsProps> = ({ productId }) => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const productReviews = useSelector(
    (state: RootState) => state.reviews.reviews[productId]
  );

  const submitReview = () => {
    if (!inputRef.current?.value) return;
    dispatch(setProductReviews(productId, inputRef.current?.value));
    inputRef.current!.value = ""; // Clear the input field
  };
  return (
    <div>
      <h2>Reviews</h2>
      <textarea
        ref={inputRef}
        style={{
          width: "100%",
          padding: "10px",
          boxSizing: "border-box",
          resize: "none",
        }}
        placeholder="Write your review here..."
      />
      <button onClick={submitReview}>Submit Review</button>
      {!!productReviews?.length &&
        productReviews.map((review: string, index: number) => (
          <ReviewItem key={index + Math.random()} review={review} />
        ))}
    </div>
  );
};

export default Reviews;
