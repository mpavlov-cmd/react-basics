import { Component } from "react";
import './App.css';

class App extends Component {

   constructor(props) {
       super(props);

       this.state = {
           monsters: [
               {
                   id: 1,
                   name: 'Max',
               },
               {
                   id: 2,
                   name: 'Ira',
               },
               {
                   id: 3,
                   name: 'Val'
               }
           ]
       }
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
