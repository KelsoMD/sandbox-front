import React from 'react';
import {NavBar} from "./NavBar";
import {MainComponent} from "./MainComponent";

export class App extends React.Component {

    render() {
        return (
            <div>
                <NavBar/>
                <MainComponent/>
            </div>
        );
    }
}

export default App