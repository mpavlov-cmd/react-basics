import { Component } from "react";
import './App.css';

class App extends Component {

   constructor() {
       super();

       this.state = {
          monsters: []
       }
   }

    // Will be called twice in case <React.StrictMode> is used
    componentDidMount() {
       // Fetch returns a promise
       fetch('https://jsonplaceholder.typicode.com/users')
           .then((response) => response.json())
           .then((users) => this.setState(
               () => {
                   return { monsters: users }
               },
               () => {
                   console.log(this.state)
               }
           ))
   }

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
