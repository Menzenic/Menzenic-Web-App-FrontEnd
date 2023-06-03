import { useState } from "react"
import "./GenericSearchBar.css"

const GenericSearchBar = (props) => {
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

export default GenericSearchBar
