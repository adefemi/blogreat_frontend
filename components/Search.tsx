"use client";

import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import useDropdown from "./dropdown";
import { IBlog } from "./BlogCard";
import { getData } from "@/utils/server";

const Search = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<any>();
  const [searchBlogs, setSearchBlogs] = useState<IBlog[]>([]);
  let debounce: any;

  const onChange = (e: any) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      setSearch(inputRef.current?.value);
    }, 1000);
  };

  const makeSearch = async () => {
    setLoading(true)
    const blogs = (await getData<IBlog[]>(`blog-url?keyword=${search}`)) || [];
    setLoading(false)
    setSearchBlogs(blogs)
  }

  useEffect(() => {
    if(search){
      makeSearch()
    }
  }, [search]);

  const getSearchInfo = () => {

    if(!search){
      return <div className="placeholder">Start typing</div>
    }

    if(loading){
      return <Loader />
    }

    if(searchBlogs.length > 0){
      return searchBlogs.map((item, index) => (
        <div className="searchItem" key={index}>
          {item.title}
        </div>
      ))
    }
    else{
      return <div className="notFound">No blog found</div>
    }
  }

  const { wrapperRef, setOpen, setClose, getDropdown } = useDropdown('search');
  return (
    <div className="search" ref={wrapperRef}>
      <input
        placeholder="search"
        onFocus={() => setOpen()}
        ref={inputRef}
        onChange={onChange}
      />
      {getDropdown(
        <div>
          {getSearchInfo()}
        </div>
      )}
    </div>
  );
};

export default Search;
