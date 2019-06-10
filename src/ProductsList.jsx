import React from 'react';
import './paper.css'
import axios from 'axios'

export class ProductsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            products: []
        };
    }

    async componentDidMount() {
        let products = await axios.get('http://localhost:8080/products');

        products = products.data;
        console.log(products);

        this.setState({
            ...this.state, ...{
                isLoading: false,
                products
            }
        });
    }

    render() {
        const {isLoading, products} = this.state;

        const productsList = (<div className="paper row flex-center sm-4 col padding-none">
                <table className="background-warning">
                    <tbody>
                    {products.map((item, key) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.amount}</td>
                            <td>{item.trademark}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );

        const loadingMessage = <span className="paper row flex-center sm-4 col">Loading...</span>;

        return (
            <div className="paper">
                {isLoading ? loadingMessage : productsList}
            </div>
        );
    }
}