import React from 'react';
import {ProductsList} from "./ProductsList";

export class App extends React.Component {

    render() {
        return (
            <div className="paper row flex-center sm-8 col">
                <ProductsList/>
                <ProductsList/>
                <ProductsList/>
                <ProductsList/>
            </div>
        );
    }
}

export default App