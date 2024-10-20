import { FC } from "react";

type ReviewItemProps = {
  review: string;
};

const ReviewItem: FC<ReviewItemProps> = ({ review }) => {
  return (
    <div
      style={{
        backgroundColor: "#f8f8f8",
        padding: "10px",
        boxSizing: "border-box",
        margin: "10px 0",
      }}
    >
      <p style={{ margin: "0px" }}>
        <strong>Anonymous</strong>
      </p>
      <p style={{ margin: "0px" }}>{review}</p>
    </div>
  );
};

export default ReviewItem;
