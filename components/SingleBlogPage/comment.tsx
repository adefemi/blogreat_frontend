import CommentCard, { IComment } from "../commentCard"

const commentData:IComment = {
    name: "Adefemigreat",
    comment: "This blog post provides a concise overview of Djuix.io and its potential benefits for developers. The sectioning and use of images make it easy to read and understand, and the author's analysis of ... ",
    created_at: "April 05, 2023"
}

const SingleBlogComment = ({slug}:{slug:string}) => {
    return <div className="comment-section">
        <div className="top-section">
            <div className="title">
                <h4>Comment</h4>
                <div className="counter">24</div>
            </div>
            <button>Add Comment</button>
        </div>

        {[1, 2, 3, 4, 5].map((_, i) => (
        <CommentCard {...commentData} key={i} />
      ))}
    </div>
}

export default SingleBlogComment