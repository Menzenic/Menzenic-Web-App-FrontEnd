import { useState } from "react";
import clsx from "clsx";

import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";

const SearchBar = (props) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className={clsx("relative", props.className)}>
            <div className="absolute left-1 top-1.5 text-black">
                <FiSearch />
            </div>
            <input
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                placeholder={props.placeholder ?? "Search"}
                className={`pl-6 min-w-[10.063rem] h-[1.875rem] text-black search-input ${props.inputClassName}`}
            />
        </div>
    );
};

export default SearchBar;
