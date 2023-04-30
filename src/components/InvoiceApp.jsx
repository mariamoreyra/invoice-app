import React from 'react'
import { getInvoice } from '../services/getInvoice'

function InvoiceApp() {
    const invoice = getInvoice();

    return (
        <>
            <div className='container'>
                <div className="card my-3">
                    <div className="card-header">
                        Factura
                    </div>

                    <div className="card-body">

                        <ul className="list-group">
                            <li className="list-group-item">id: {invoice.id}</li>
                            <li className="list-group-item">Name: {invoice.name}</li>
                        </ul>

                        <div className="row my-3">
                            <div className="col">
                                <h3>Datos del Cliente</h3>
                                <ul className="list-group">
                                    <li className="list-group-item active">{invoice.client.name} {invoice.client.lastName}</li>
                                    <li className="list-group-item">{invoice.client.address.country} {invoice.client.address.city}</li>
                                    <li className="list-group-item">{invoice.client.address.street} {invoice.client.address.number}</li>
                                </ul>
                            </div>


                            <div className="col" >
                                <h3>Datos de la empresa</h3>
                                <ul className="list-group">
                                    <li className="list-group-item active">{invoice.company.name}</li>
                                    <li className="list-group-item">{invoice.company.fiscalNumber}</li>
                                </ul>
                            </div>
                        </div>


                        <h4>Productos de la Factura</h4>
                        <table className="table table-striped table-hover">
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
                                        <tr key={item.id}>
                                            <td>{item.product}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InvoiceApp