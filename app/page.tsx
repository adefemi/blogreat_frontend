import SpecialCard, { ISpecialBlog } from "@/components/SpecialCard";
import BlogCard, { IBlog } from "../components/BlogCard";
import CommentCard, { IComment } from "@/components/commentCard";

const testBlog: IComment = {
  name: "Adefemigreat",
  comment:
    "This blog post provides a concise overview of Djuix.io and its potential benefits for developers. The sectioning and use of images make it easy to read and understand, and the author's analysis of ... ",
  created_at: "April 05, 2023",
};

export default function Home() {
  return (
    <main>
      <h1>welcome to blogreat</h1>
      <CommentCard {...testBlog} />
    </main>
  );
}
