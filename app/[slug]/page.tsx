import { IBlog } from "@/components/BlogCard";
import Header from "@/components/Header";
import SingleBlogComment from "@/components/SingleBlogPage/comment";
import SingleBlogContent from "@/components/SingleBlogPage/content";
import { getData } from "@/utils/server";

const SingleBlog = async (props:any) => {
  const {slug} = props.params
  const blogContent = await getData<IBlog>(`blog-url/${slug}`)

  if(!blogContent){
    return <div>
      The blog is invalid or no longer exist.
    </div>
  }

  return (
    <div>
      <div className="singleBlogLayout">
        <section>
            <SingleBlogContent {...blogContent}/>
        </section>
        <section>
            <SingleBlogComment slug={slug} id={blogContent.id} />
        </section>
      </div>
    </div>
  );
};

export default SingleBlog;
