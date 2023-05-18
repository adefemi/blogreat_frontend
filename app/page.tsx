import BlogCard, { IBlog } from "../components/BlogCard";

const testBlog: IBlog = {
  title: "Djuix.io can make your development 100% faster -  Adefemigreat",
  caption:
    "Adefemigreat claims that Djuix.io can significantly accelerate development time by offering a streamlined interface and simplified setup, potentially resulting in a 100% increase in productivity...",
  tag: {
    id: "1",
    name: "Tech",
  },
  content: "",
  slug: "djuix.io",
  created_at: "April 05, 2023"
};

export default function Home() {
  return (
    <main>
      <h1>welcome to blogreat</h1>
      <BlogCard {...testBlog} />
    </main>
  );
}
