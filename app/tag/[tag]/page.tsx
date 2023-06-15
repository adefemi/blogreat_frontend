import TagMenu from "@/components/TagMenu";
import BlogList from "@/components/Homepage/blogList";
import TopBlog from "@/components/Homepage/topBlog";

const BlogByTag = async (props: any) => {
  const { tag } = props.params;
  return (
    <main>
      {/* @ts-expect-error Server Component */}
      <TagMenu />
      <div className="blog-layout tag-layout">
        <section>
          {/* @ts-expect-error Server Component */}
          <BlogList
            tag={tag}
          />
        </section>
        <section>
          {/* @ts-expect-error Server Component */}
          <TopBlog tag={tag}/>
        </section>
      </div>
    </main>
  );
};

export default BlogByTag;
