import React from 'react'
import { getInvoice } from './services/getInvoice'
import InvoiceView from './components/InvoiceView';
import ClientView from './components/ClientView';
import CompanyView from './components/CompanyView';
import ListItemView from './components/ListItemView';
import TotalView from './components/TotalView';

function InvoiceApp() {
    const {invoice, total} = getInvoice();
    console.log(invoice);

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
                        <TotalView total={total}></TotalView>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InvoiceApp