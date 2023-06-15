import { getData } from "@/utils/server";
import BlogCard, { IBlog } from "../BlogCard";

const BlogList = async ({ tag }: { tag?: string }) => {
  let endpoint = "blog-url";
  if (tag) {
    endpoint += `?tag__name__iexact=${tag}`;
  }
  const blogs = (await getData<IBlog[]>(endpoint)) || [];
  return (
    <div>
      <h3>
        {tag ? (
          <>
            Showing blog posts for &quot;
            <span className="capitalize">{tag}</span>&quot;
          </>
        ) : (
          "Latest News"
        )}
      </h3>
      {blogs.map((blog, i) => (
        <BlogCard
          {...blog}
          cover={undefined}
          classname="blog-card-list"
          key={i}
        />
      ))}
      {blogs.length < 1 && <div className="notFound">No blog found!</div>}
    </div>
  );
};

export default BlogList;
