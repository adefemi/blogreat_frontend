import { getData } from "@/utils/server";
import BlogCard, { IBlog } from "../BlogCard";

const TopBlog = async ({ tag }: { tag?: string }) => {
  let endpoint = "top-blog-url";
  if (tag) {
    endpoint += `?tag__name__iexact=${tag}`;
  }
  const blogs = (await getData<IBlog[]>(endpoint)) || [];
  return (
    <div>
      <h3>
        {tag ? (
          <>
            Top Posts for &quot;
            <span className="capitalize">{tag}</span>&quot;
          </>
        ) : (
          "Top Blog"
        )}
      </h3>
      {blogs.map((blog, i) => (
        <BlogCard
          {...blog}
          caption={undefined}
          classname="top-blog-card"
          key={i}
        />
      ))}
      {blogs.length < 1 && <div className="notFound">No blog found!</div>}
    </div>
  );
};

export default TopBlog;
