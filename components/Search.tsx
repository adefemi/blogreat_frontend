"use client"

import useDropdown from "./dropdown"

const Search = () => {
    const {wrapperRef, setOpen, setClose, getDropdown} = useDropdown()
    return <div className="search" ref={wrapperRef}>
        <input placeholder="search" onFocus={() => setOpen()} />
        {
            getDropdown(<div>

                {
                    [1,2,4,5].map((item, index) => <li key={index}>{item}</li>)
                }

            </div>)
        }
    </div>
}

export default Search