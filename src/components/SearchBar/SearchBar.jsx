import { useState } from "react"
import "./SearchBar.css"

const SearchBar = (props) => {
    const [inputValue, setInputValue] = useState("")

    return (
        <div className="generic-search-container">
            {props.icon ? (
                <div className="generic-search-icon">{props.icon}</div>
            ) : (
                ""
            )}
            <input
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                placeholder={props.placeholder ?? "Search"}
                className="generic-search-input"
            />
        </div>
    )
}

export default SearchBar
