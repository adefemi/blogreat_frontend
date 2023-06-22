'use client'

import { formatDate } from "@/utils/function"

const TagMenuDate = () => {
    const {date, month, day, year} = formatDate()
    return (
        <div className="tag tagDate">
          <div className="day">{day}</div>
          <div className="date">{`${date} ${month}, ${year}`}</div>
        </div>
    )
}

export default TagMenuDate