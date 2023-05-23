import SpecialCard, { ISpecialBlog } from "../SpecialCard"

const specialBlogContent:ISpecialBlog = {
    title: "“Bleach 1000 years war” is awaited by many, will they meet up with the needs",
    caption: `"Bleach 1000 years war" is one of the most anticipated events in the anime and manga community. Fans have been eagerly waiting for the continuation of the story after the Thousand-Year Blood War arc. With the recent announcement of the anime adaptation, expectations are high, and fans are hoping that it will meet up with their needs. Only time will tell if "Bleach 1000 years war" will live up to the hype and satisfy the long-standing fans.`,
    created_at: "April 05, 2023",
    slug: "",
    cover: "https://res.cloudinary.com/adefemigreat/image/upload/v1684837889/samples/Rectangle_153_ib8hu9.png",
    content: "",
    tag: {
        name: "Movie",
        id: "1"
    }
}

const SpecialBlog = () => {
    return (
        <div>
            <h3>{specialBlogContent.tag.name}</h3>
            <SpecialCard {...specialBlogContent} />
        </div>
    )
}

export default SpecialBlog