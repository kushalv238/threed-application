import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './../../../stylesheets/search.css';

const Search = (props) => {
    const[userSearch, setUserSearch] = useState("");
    
    const search = (userSearch) => {
        setUserSearch('');
        console.log(userSearch);
    }

    return (
        <div
            className={`searchPage${props.panelActive ? ' overlay' : ''}`}
            onClick={()=>props.isPanelActive(false)}
        >
            <div className='search'>
                <input
                    id="search-bar"
                    placeholder='Search'
                    autoFocus={true}
                    value= {userSearch}
                    onChange={(event) => setUserSearch(event.target.value)}
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className="search-icon"
                    title="search"
                    onClick={() => search(userSearch)}
                />
            </div>
        </div>
    );
};

export default Search;