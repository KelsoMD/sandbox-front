import React from 'react';
import './paper.css'
import PropTypes from "prop-types";

export class Product extends React.Component {

    render() {
        const {title, amount, trademark, isLoading} = this.props;

        const product = (
            <div>
                <h4 className="mb-0">{title}</h4>
                <h4 className="mb-0">{amount}</h4>
                <span className="text-muted">{trademark}</span>
            </div>
        );

        const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

        return (
            <div
                className="mx-auto mt-4 text-center p-5"
                style={{maxWidth: "300px", minHeight: "250px"}}
            >
                {isLoading ? loadingMessage : product}
            </div>
        );
    }
}

Product.propTypes = {
    title: PropTypes.string,
    amount: PropTypes.number,
    trademark: PropTypes.string,
    isLoading: PropTypes.bool
};

export default Product;