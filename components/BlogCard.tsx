import Link from "next/link";
import { ITag } from "./TagMenu";

export interface IBlog {
  title: string;
  caption?: string;
  cover?: string;
  slug: string;
  created_at: string;
  content: string;
  tag: ITag;
  classname?: string;
}

const BlogCard = (blog: IBlog) => {
  return (
    <div className={`blogCard ${blog.classname ? blog.classname : ''}`}>
      <div className="blogContent">
        <div className="top">
          <div className="badge">{blog.tag.name}</div>
          <div className="date">{blog.created_at}</div>
        </div>
        <div className="body">
          <h3>{blog.title}</h3>
          {blog.caption && <p>{blog.caption}</p>}
        </div>

        <Link href={`/${blog.slug}`}>Continue Reading...</Link>
      </div>
      {blog.cover && (
        <div
          className="cover"
          style={{ backgroundImage: `url(${blog.cover})` }}
        />
      )}
    </div>
  );
};

export default BlogCard;
