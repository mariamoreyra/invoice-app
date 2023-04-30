import React from 'react'
import { getInvoice } from '../services/getInvoice'

function InvoiceApp() {
    const invoice = getInvoice();

    return (
        <>
            <h1>Factura</h1>
            <ul>
                <li>id: {invoice.id}</li>
                <li>Name: {invoice.name}</li>
            </ul>
            <h3>Datos del Cliente</h3>
            <ul>
                <li>{invoice.client.name} {invoice.client.lastName}</li>
                <li>{invoice.client.address.country}</li>
                <li>{invoice.client.address.city}</li>
                <li>{invoice.client.address.street} {invoice.client.address.number}</li>
            </ul>
            <h3>Datos de la empresa</h3>
            <ul>
                <li>{invoice.company.name}</li>
                <li>{invoice.company.fiscalNumber}</li>
            </ul>
            <h4>Productos de la Factura</h4>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {invoice.items.map(item => {
                        return (
                            <tr key = {item.id}>
                                <td>{item.product}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}

export default InvoiceApp