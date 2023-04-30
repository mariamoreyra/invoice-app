import React from 'react';
import PropTypes from 'prop-types';

const InvoiceView = ({id, name}) => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">id: {id}</li>
                <li className="list-group-item">Name: {name}</li>
            </ul>
        </>
    )
}

export default InvoiceView

InvoiceView.prototype = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}