import './search-box.styles.css'

const SearchBox = ({onChangeHandler, searchPlaceholder, className}) =>
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