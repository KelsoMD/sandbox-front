import {connect} from "react-redux";
import {ProductCard} from "./ProductCard";

const mapDispatchToProps = (dispatch) => {
    return {}
}


const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        title: state.title,
        amount: state.amount,
        trademark: state.trademark
    }
}

const ProductCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductCard);

export default ProductCardContainer;