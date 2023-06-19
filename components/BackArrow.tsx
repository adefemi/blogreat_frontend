'use client'

import { useRouter } from "next/navigation"
import {IoChevronBackOutline} from "react-icons/io5"

const BackArrow = () => {

    const {back} = useRouter()

    return (
        <div className="backArrow" onClick={back}>
            <IoChevronBackOutline />
        </div>
    )
}

export default BackArrow