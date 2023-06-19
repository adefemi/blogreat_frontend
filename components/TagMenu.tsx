import { getData } from "@/utils/server";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import TagMenuDropdown from "./TagMenuDropdown";
import Link from "next/link";
import TagMenuDate from "./TagMenuDate";

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

const TagMenu = async () => {
  const tags = await getData<ITag[]>("tag-url") || []
  return (
    <nav>
      <div className="tag_items">
        <TagMenuDate />
        {tags.slice(0, 10).map((tag, i) => (
          <Link href={`/tag/${tag.name.toLowerCase()}`} className="tag" key={i}>
            {tag.name}
          </Link>
        ))}
        <TagMenuDropdown tags={tags} />
      </div>
    </nav>
  );
};

export default TagMenu;
