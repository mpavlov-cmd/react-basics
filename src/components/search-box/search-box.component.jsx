import {Component} from "react";

class SearchBox extends Component {

    render() {

        const {onChangeHandler, searchPlaceholder, className} = this.props;

        return (
            <div className='searchBoxWrapper'>
                <input
                       type='search'
                       className={className}
                       placeholder={searchPlaceholder}
                       onChange={onChangeHandler}
                />
            </div>
        )
    }
}

export default SearchBox;