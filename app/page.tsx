import Header from "@/components/Header";
import BlogList from "@/components/Homepage/blogList";
import SpecialBlog from "@/components/Homepage/specialBlog";
import TopBlog from "@/components/Homepage/topBlog";
import TagMenu from "@/components/TagMenu";

export default function Home() {
  return (
    <main>
      <Header />
      <TagMenu />
      <div className="blog-layout">
        <section>
          <SpecialBlog />
        </section>
        <section>
          <BlogList />
        </section>
        <section>
          <TopBlog />
        </section>
      </div>
    </main>
  );
}
