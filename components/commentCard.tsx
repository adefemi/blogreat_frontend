import Link from "next/link";

export interface IComment {
  name: string;
  created_at: string;
  comment: string;
}

const CommentCard = (comment: IComment) => {
  return (
    <div className="commentCard">
      <div className="top">
        <div className="name">{comment.name}</div>
        <div className="dash"/>
        <div className="date">{comment.created_at}</div>
      </div>
      <div className="body">
        <p>
          {comment.comment}
          {/* <Link href={""}>Read more</Link> */}
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
