import BlogCard, { IBlog } from "../BlogCard";

const blogContent: IBlog = {
  title: `Djuix.io can make your development 100% faster -  Adefemigreat`,
  caption: `Adefemigreat claims that Djuix.io can significantly accelerate development time by offering a streamlined interface and simplified setup, potentially resulting in a 100% increase in productivity...`,
  created_at: "April 05, 2023",
  slug: "",
  content: "",
  tag: {
    name: "Tech",
    id: "1",
  },
};

const BlogList = () => {
  return (
    <div>
      <h3>Latest News</h3>
      {[1, 2, 3, 4, 5].map((_, i) => (
        <BlogCard {...blogContent} classname="blog-card-list" key={i} />
      ))}
    </div>
  );
};

export default BlogList;
