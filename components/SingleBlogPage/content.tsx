import { formatDate } from "@/utils/function";
import { IBlog } from "../BlogCard";
import BackArrow from "../BackArrow";

const SingleBlogContent = (blog: IBlog) => {
  const {date, month, year} = formatDate(blog.created_at)
  return (
    <div className="single-content">
      <BackArrow />
      <div className="top">
        <div className="badge">{blog.tag.name}</div>
        <div className="date">{`${month} ${date}, ${year}`}</div>
      </div>

      {blog.cover && (
        <div
          className="cover"
          style={{ backgroundImage: `url(${blog.cover})` }}
        />
      )}

      <h2>{blog.title}</h2>

      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default SingleBlogContent;
