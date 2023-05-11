import ReviewForm from "./ReviewForm";
import { useState } from "react";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);
  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };
  return (
    <div className="Review">
      <button onClick={toggleView}>edit this review</button>
      
      {
 viewEditForm ? (
 <ReviewForm reviewDetails={review} handleSubmit={handleSubmit} toggleView={toggleView}/>
 ) : (
 <div>
 <h4>
 {review.title} <span>{review.rating}</span>
 </h4>
 <h5>{review.reviewer}</h5>
 <p>{review.content}</p>
 </div>
 )
}
        <button onClick={() => handleDelete(review.id)}>delete</button>
      </div>
  );
}


export default Review;