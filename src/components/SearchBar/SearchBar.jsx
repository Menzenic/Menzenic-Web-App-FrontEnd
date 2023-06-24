import { useState } from "react"
import clsx from "clsx"

import "./SearchBar.css"

const SearchBar = (props) => {
    const [inputValue, setInputValue] = useState("")

    return (
        <div className={clsx("relative", props.className)}>
            {props.icon ? (
                <div className="absolute left-1 top-1.5 text-black">{props.icon}</div>
            ) : (
                ""
            )}
            <input
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                placeholder={props.placeholder ?? "Search"}
                className="pl-6 w-[10.063rem] h-[1.875rem] text-black search-input"
            />
        </div>
    )
}

export default SearchBar
