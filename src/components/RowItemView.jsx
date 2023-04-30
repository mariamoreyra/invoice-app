import React from 'react';
import PropTypes from 'prop-types';


const RowItemView = ({product, price, quantity}) => {
 
    return (
        <>
            <tr>
                <td>{product}</td>
                <td>{price}</td>
                <td>{quantity}</td>
            </tr>
        </>
    )
}

export default RowItemView

RowItemView.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}