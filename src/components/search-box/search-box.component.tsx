import './search-box.styles.css'
import {ChangeEvent} from "react";

type SearchBoxProps = {
    className: string;
    searchPlaceholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({className, searchPlaceholder, onChangeHandler} : SearchBoxProps) =>
    (
        <div className='searchBoxWrapper'>
            <input
                type='search'
                className={`searchBox ${className}`}
                placeholder={searchPlaceholder}
                onChange={onChangeHandler}
            />
        </div>
    )

export default SearchBox;
