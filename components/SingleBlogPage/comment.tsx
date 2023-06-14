"use client";

import { useEffect, useRef, useState } from "react";
import CommentCard, { IComment } from "../commentCard";
import { getData, postData } from "@/utils/server";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useModal } from "../modal";

const SingleBlogComment = ({ slug, id }: { slug: string; id: string }) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [formSubmit, setFormSubmit] = useState(false);
  const { getModalContent, showModal, closeModal } = useModal();
  const formRef = useRef<any>();

  const getComments = async () => {
    const comments =
      (await getData<IComment[]>(`comment-url?blog__slug=${slug}`)) || [];
    setComments(comments);
    setLoading(false);
  };

  useEffect(() => {
    getComments();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormSubmit(true);
    const data = {
      name: formRef.current.elements["name"].value,
      comment: formRef.current.elements["comment"].value,
      blog_id: id,
    };
    const res = await postData(`comment-url/`, data);
    if (res) {
      setLoading(true);
      getComments();
      formRef.current.reset();
      closeModal();
    } else {
      alert("There was an error");
    }
    setFormSubmit(false);
  };

  return (
    <>
      <div className="comment-section">
        <div className="top-section">
          <div className="title">
            <h4>Comment</h4>
            {!loading && <div className="counter">{comments.length}</div>}
          </div>
          <button onClick={showModal}>Add Comment</button>
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
      {getModalContent(
        <div>
          <div className="modalHeading">
            <div className="title">Add Comment</div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="modalBody">
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input-group">
                <label>Comment</label>
                <textarea
                  name="comment"
                  placeholder="write your comment"
                  required
                />
              </div>
              <br />
            </div>
            <div className="modalFooter">
              <button type="submit" disabled={formSubmit}>
                {formSubmit ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SingleBlogComment;
