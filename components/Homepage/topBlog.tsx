import { getData } from "@/utils/server";
import BlogCard, { IBlog } from "../BlogCard";

const TopBlog = async () => {
  const blogs = (await getData<IBlog[]>("top-blog-url")) || [];
  return (
    <div>
      <h3>Top Blog</h3>
      {blogs.map((blog, i) => (
        <BlogCard
          {...blog}
          caption={undefined}
          classname="top-blog-card"
          key={i}
        />
      ))}
    </div>
  );
};

export default TopBlog;
