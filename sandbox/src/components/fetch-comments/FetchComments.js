import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
function FetchComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      console.log(data);
      setComments(data);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <ul>
        {comments.map((comment) => {
          return <li key={comment.id}>{comment.body}</li>;
        })}
      </ul>
    </Fragment>
  );
}

export default FetchComments;
