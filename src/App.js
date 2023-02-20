import {Component} from "react";
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {

    // Called as a first thing for any JS class
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }

        console.log("constructor")
    }

    // Will be called twice in case <React.StrictMode> is used
    // Otherwise called only once after INITIAL render
    componentDidMount() {
        console.log("componentDidMount")

        // Fetch returns a promise
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(
                () => {
                    return {monsters: users}
                }
            ))
    }

    // Called after constructor and before render evey time
    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps")
        return null;
    }

    // For performance’s sake anonymous functions should not be defined inside or render method
    onSearchChange = (event) => {
        this.setState(() => {
            return {
                searchField: event.target.value.toLowerCase()
            }
        }, () => console.log(this.state))
    }

    // Called after getDerivedStateFromProps and any time after state changed
    render() {
        console.log("render")

        // Assign state properties to local variables to shorten the code
        const {monsters, searchField} = this.state;
        const {onSearchChange} = this;

        const filteredMonsters = monsters
            .filter((value) => value.name.toLowerCase().includes(searchField))

        return (
            <div className="App">
                <SearchBox
                    searchPlaceholder='search monsters'
                    className='searchBox'
                    onChangeHandler={onSearchChange}
                />
                <CardList monsters = {filteredMonsters} />
            </div>
        );
    }
}

export default App;
