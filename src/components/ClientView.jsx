import React from 'react'

const ClientView = ({title, client}) => {
    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item active">{client.name} {client.lastName}</li>
                <li className="list-group-item">{client.address.country} {client.address.city}</li>
                <li className="list-group-item">{client.address.street} {client.address.number}</li>
            </ul>
        </>
    )
}

export default ClientView