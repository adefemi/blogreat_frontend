import Link from "next/link";
import { IBlog } from "./BlogCard";
import { formatDate } from "@/utils/function";

export interface ISpecialBlog extends IBlog {
  cover: string;
  caption: string;
}

const SpecialCard = (blog: ISpecialBlog) => {
  const {date, month, year} = formatDate(blog.created_at)
  return (
    <div className="specialCard">
      <div
          className="cover"
          style={{ backgroundImage: `url(${blog.cover})` }}
        />
      <div className="blogContent">
        <div className="top">
          <div className="date">{`${month} ${date}, ${year}`}</div>
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
