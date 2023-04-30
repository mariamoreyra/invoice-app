import React from 'react'
import { getInvoice } from '../services/getInvoice'
import InvoiceView from './InvoiceView';
import ClientView from './ClientView';
import CompanyView from './CompanyView';
import ListItemView from './ListItemView';

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
                        <InvoiceView id={invoice.id} name={invoice.name}></InvoiceView>

                        <div className="row my-3">
                            <div className="col">
                                <ClientView title={'Datos del Cliente'} client={invoice.client}></ClientView>
                            </div>

                            <div className="col" >
                                <CompanyView title={'Datos de la empresa'} company={invoice.company}></CompanyView>
                            </div>
                        </div>
                        <ListItemView title={'Productos de la Factura'} items={invoice.items}></ListItemView>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InvoiceApp