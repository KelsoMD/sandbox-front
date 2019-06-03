import React from 'react';
import './paper.css'
import {Product} from "./Product";
import axios from 'axios'

export class MainComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            title: null,
            amount: null,
            trademark: null
        };
    }

    render() {
        const {isLoading, title, amount, trademark} = this.state;
        return (
            <div className="paper"><Product title={title} amount={amount} trademark={trademark} isLoading={isLoading}/>
            </div>
        );
    }

    async componentDidMount() {
        let product = await axios.get('http://localhost:8080/products/1');

        product = product.data;
        console.log(product);

        const title = product.title;
        const amount = product.amount;
        const trademark = product.trademark;

        this.setState({
            ...this.state, ...{
                isLoading: false,
                title,
                amount,
                trademark
            }
        });

    }
}