import Link from "next/link";
import { IBlog } from "./BlogCard";

export interface ISpecialBlog extends IBlog {
  cover: string;
  caption: string;
}

const SpecialCard = (blog: ISpecialBlog) => {
  return (
    <div className="specialCard">
      <div
          className="cover"
          style={{ backgroundImage: `url(${blog.cover})` }}
        />
      <div className="blogContent">
        <div className="top">
          <div className="date">{blog.created_at}</div>
        </div>
        <div className="body">
          <h3>{blog.title}</h3>
          <p>{blog.caption}</p>
        </div>

        <Link href={`/${blog.slug}`}>Continue Reading...</Link>
      </div>

    </div>
  );
};

export default SpecialCard;
