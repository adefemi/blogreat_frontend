import { IBlog } from "../BlogCard";

const SingleBlogContent = (blog:IBlog) => {
    return <div className="single-content">
        <div className="top">
          <div className="badge">{blog.tag.name}</div>
          <div className="date">{blog.created_at}</div>
        </div>

        <h2>{blog.title}</h2>

        <div dangerouslySetInnerHTML={{__html: blog.content}} />
    </div>
}

export default SingleBlogContent