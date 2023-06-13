"use client";

import { useEffect, useState } from "react";
import CommentCard, { IComment } from "../commentCard";
import { getData } from "@/utils/server";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SingleBlogComment = ({ slug }: { slug: string }) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState(true);

  const getComments = async () => {
    const comments = (await getData<IComment[]>(`comment-url?blog__slug=${slug}`)) || [];
    setComments(comments);
    setLoading(false);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="comment-section">
      <div className="top-section">
        <div className="title">
          <h4>Comment</h4>
          <div className="counter">24</div>
        </div>
        <button>Add Comment</button>
      </div>

      {loading ? (
        <div className="skloading">
          <Skeleton className="title" />
          <Skeleton count={2} />
        </div>
      ) : comments.length < 1 ? (
        <div className="noFound">No comments found!</div>
      ) : (
        comments.map((commentData, i) => (
          <CommentCard {...commentData} key={i} />
        ))
      )}
    </div>
  );
};

export default SingleBlogComment;
