import { getData } from "@/utils/server";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import TagMenuDropdown from "./TagMenuDropdown";
import Link from "next/link";
import TagMenuDate from "./TagMenuDate";

export interface ITag {
  id: string;
  name: string;
}

const TagMenu = async () => {
  const tags = (await getData<ITag[]>("tag-url")) || [];
  return (
    <nav>
      <div className="tag_items">
        <TagMenuDate />
        <div className="tag_item_container">
          {tags.slice(0, 10).map((tag, i) => (
            <Link
              href={`/tag/${tag.name.toLowerCase()}`}
              className="tag"
              key={i}
            >
              {tag.name}
            </Link>

          ))}
        </div>
        <TagMenuDropdown tags={tags} />
      </div>
    </nav>
  );
};

export default TagMenu;
