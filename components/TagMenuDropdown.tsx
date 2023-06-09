'use client'

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { ITag } from "./TagMenu";
import useDropdown from "./dropdown";

const TagMenuDropdown = ({ tags }: { tags: ITag[] }) => {
  const { wrapperRef, setOpen, setClose, getDropdown } = useDropdown('tagMenuDrop');

  return (
    <>
      <div className="toggle" onClick={() => setOpen()}>
        <HiOutlineDotsHorizontal />
      </div>
      {getDropdown(
        <div ref={wrapperRef} className="tagMenuDropdown">
          {tags.map((tag, index) => (
            <div className="item" key={index}>
              {tag.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TagMenuDropdown;
