import {Component} from "react";
import './App.css';

class App extends Component {

    // Called as a first thing for any JS class
    constructor() {
        super();

        this.state = {
            monsters: []
        }
    }

    // Will be called twice in case <React.StrictMode> is used
    // Otherwise called only once after INITIAL render
    componentDidMount() {
        // Fetch returns a promise
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(
                () => {
                    return {monsters: users}
                },
                () => {
                    console.log(this.state)
                }
            ))
    }

    // Called after constructor and before render evey time
    static getDerivedStateFromProps() {
        console.log("Get Derived State From Props")
        return null;
    }

    // Called after getDerivedStateFromProps and any time after state changed
    render() {
        return (
            <div className="App">
                {
                    this.state.monsters.map((monster, index) => {
                        return (
                            <div key={monster.id} id={'monster' + index}>
                                <h1 className="monsterHeading">{monster.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default App;
