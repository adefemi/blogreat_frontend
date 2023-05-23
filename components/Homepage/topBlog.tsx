import BlogCard, { IBlog } from "../BlogCard";

const blogContent: IBlog = {
  title: `Djuix.io can make your development 100% faster -  Adefemigreat`,
  created_at: "April 05, 2023",
  slug: "",
  content: "",
  cover:
    "https://res.cloudinary.com/adefemigreat/image/upload/v1684745568/samples/Frame_176_jms8sb.jpg",
  tag: {
    name: "Tech",
    id: "1",
  },
};

const TopBlog = () => {
  return (
    <div>
      <h3>Top Blog</h3>
      {[1, 2, 3, 4, 5].map((_, i) => (
        <BlogCard {...blogContent} classname="top-blog-card" key={i} />
      ))}
    </div>
  );
};

export default TopBlog;
