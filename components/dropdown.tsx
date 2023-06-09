import { useEffect, useRef } from "react"

const useDropdown = (type:any) => {
    const wrapperRef = useRef<any>()

    const getDropdownElement = () => {
        return document.getElementById(`dropDownContainer${type}`)
    }

    const hasCloseClass = () => {
        return getDropdownElement()?.classList.contains("close")
    }

    const setOpen = () => {
        if(!hasCloseClass())return
        getDropdownElement()?.classList.remove("close")
    }

    const setClose = () => {
        if(hasCloseClass())return
        getDropdownElement()?.classList.add("close")
    }

    const handleOutsideClick = (event:any) => {
        if(wrapperRef.current && !wrapperRef.current.contains(event.target)){
            setClose()
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    }, [])

    const getDropdown = (children: React.ReactNode) => {
        return <div className="dropdown close" id={`dropDownContainer${type}`}>
            {children}
        </div>
    }

    return {
        getDropdown,
        wrapperRef,
        setOpen,
        setClose
    }
}

export default useDropdown