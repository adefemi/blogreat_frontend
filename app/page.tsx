import Header from "@/components/Header";
import BlogList from "@/components/Homepage/blogList";
import SpecialBlog from "@/components/Homepage/specialBlog";
import TopBlog from "@/components/Homepage/topBlog";
import TagMenu from "@/components/TagMenu";

export default function Home() {
  return (
    <main>
      <Header />
      {/* @ts-expect-error Server Component */}
      <TagMenu />
      <div className="blog-layout">
        <section>
          {/* @ts-expect-error Server Component */}
          <SpecialBlog />
        </section>
        <section>
          {/* @ts-expect-error Server Component */}
          <BlogList />
        </section>
        <section>
          {/* @ts-expect-error Server Component */}
          <TopBlog />
        </section>
      </div>
    </main>
  );
}
