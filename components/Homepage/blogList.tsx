import { getData } from "@/utils/server";
import BlogCard, { IBlog } from "../BlogCard";

const BlogList = async () => {
  const blogs = (await getData<IBlog[]>("blog-url")) || [];
  return (
    <div>
      <h3>Latest News</h3>
      {blogs.map((blog, i) => (
        <BlogCard
          {...blog}
          cover={undefined}
          classname="blog-card-list"
          key={i}
        />
      ))}
    </div>
  );
};

export default BlogList;
