import ReviewForm from "./ReviewForm";
import { useState } from "react";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };
  return (
    <div className="Review">
      <button
        type="button"
        className="bg-green-300 hover:bg-green-100 mt-4 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline rounded-lg shadow-green-500/50 border shadow-md"
        onClick={toggleView}
      >
        Edit this review
      </button>
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          handleSubmit={handleSubmit}
          toggleView={toggleView}
        />
      ) : (
        <div
          className="flex flex-col items-center m-6 p-6 justify-center rounded-lg shadow-green-500/50 border shadow-md"
          style={{ paddingBottom: "10rem" }}
        >
          <h4 className="text-lg font-bold p-6 mb-6">Title : {review.title}</h4>
          <h4 className="text-lg font-bold p-6 mb-6">
            Rating : {review.rating}
          </h4>
          <h5 className="text-lg font-bold mb-6">Reviewer : {review.reviewer}</h5>
          <p className="text-lg font-bold mb-6">Description: {review.content}</p>
        </div>
      )}
      <button
        type="button"
        className="bg-green-300 hover:bg-green-100 mt-4 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline rounded-lg shadow-green-500/50 border shadow-md"
        onClick={() => handleDelete(review.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Review;
