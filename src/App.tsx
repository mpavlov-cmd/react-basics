import {useState, useEffect, ChangeEvent} from "react";
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import {getData} from "./utils/data.utils";

export type Monster = {
    id: string;
    name: string;
    email: string;
}

const App = () => {

    // useSate contains value and setValue function inside of array and accepts an initial value as an argument
    // array destructure allows to assign array values to the variables
    // In case functional component needs to store multiple state variables, useState should be used multiple times
    // useState holds only one state property
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);


    // Use effect takes 2 arguments - a callback and an array of dependency
    // Callback function will run first time the component function is called
    // Then during every re-render the callback or effect function will run only if values of dependency array change
    useEffect(
        () => {
           const fetchUsers = async () => {
               const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
               setMonsters(users);
           }

           fetchUsers().then();
        },
        // Empty array is passed because we never want to call fetch after initial load
        []
    )

    // Update filtered monsters only when search field changes or monsters changes
    useEffect(
        () => {
            const newFilteredMonsters = monsters
                .filter((value) => value.name.toLowerCase().includes(searchField));
            setFilteredMonsters(newFilteredMonsters);
        },
        [monsters, searchField]
    )

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchField(event.target.value.toLowerCase());
    }

    return (
        <div className="App">
            <h1 className='appTitle'>Monsters Rolodex</h1>
            <SearchBox
                searchPlaceholder='search monsters'
                className='monstersSearchBox'
                onChangeHandler={onSearchChange}
            />
            <CardList monsters = {filteredMonsters} />
        </div>
    )
}

export default App;
