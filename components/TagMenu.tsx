import { HiOutlineDotsHorizontal } from "react-icons/hi";

const tags = [
  "Politics",
  "Business",
  "Opinion",
  "Tech",
  "Sciences",
  "Sports",
  "Arts",
  "Books",
  "Styles",
  "Food",
  "Travel",
];

export interface ITag {
    id: string;
    name: string;
}

const TagMenu = () => {
  return (
    <nav>
      <div className="tag_items">
        <div className="tag">
          <div className="day">Sunday</div>
          <div className="date">17 Apr, 2023</div>
        </div>
        {tags.map((tag, i) => (
          <div className="tag" key={i}>
            {tag}
          </div>
        ))}
        <div className="toggle">
          <HiOutlineDotsHorizontal />
        </div>
      </div>
    </nav>
  );
};

export default TagMenu;
