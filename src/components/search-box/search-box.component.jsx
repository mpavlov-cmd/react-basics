import {Component} from "react";
import './search-box.styles.css'

class SearchBox extends Component {

    render() {

        const {onChangeHandler, searchPlaceholder, className} = this.props;

        return (
            <div className='searchBoxWrapper'>
                <input
                       type='search'
                       className={`searchBox ${className}`}
                       placeholder={searchPlaceholder}
                       onChange={onChangeHandler}
                />
            </div>
        )
    }
}

export default SearchBox;