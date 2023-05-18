import Link from "next/link";
import { ITag } from "./TagMenu";

export interface IBlog {
    title: string;
    caption: string;
    cover?: string;
    slug: string;
    created_at: string;
    content: string;
    tag: ITag
}

const BlogCard = (blog:IBlog) => {
    return <div className="blogCard">
        <div className="top">
            <div className="badge">{blog.tag.name}</div>
            <div className="date">{blog.created_at}</div>
        </div>
        <div className="body">
            <h3>{blog.title}</h3>
            <p>{blog.caption}</p>
        </div>

        <Link href={""}>
            Continue Reading...
        </Link>
    </div>
}

export default BlogCard