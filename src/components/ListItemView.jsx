import React from 'react';
import RowItemView from './RowItemView';
import PropTypes from 'prop-types';

const ListItemView = ({ title, items }) => {
    return (
        <>
            <h4>{title}</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, price, quantity }) => {
                        return <RowItemView key={id} product={product} price={price} quantity={quantity}></RowItemView>;
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ListItemView

ListItemView.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}