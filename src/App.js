import { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {

   constructor(props) {
       super(props);

       this.state = {
           name: {
               firstName: 'Maxim',
               lastName: 'Pavlov'
           },
           company: 'ZTM'
       }
   }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Hi my name is {this.state.name.firstName} {this.state.name.lastName}
                        I work at {this.state.company}!
                    </p>
                   <button onClick={() => {
                       this.setState(
                           (state, props) => {
                               return {
                                   name: {
                                       firstName: 'Ira',
                                       lastName: 'Korobtsova'
                                   }
                               }
                           },
                           () => {
                               console.log(this.state)
                           }
                       )
                   }}>Change Name</button>
                </header>
            </div>
        );
    }
}

export default App;
