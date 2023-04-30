import React, { useState } from 'react'
import { getInvoice } from './services/getInvoice'
import InvoiceView from './components/InvoiceView';
import ClientView from './components/ClientView';
import CompanyView from './components/CompanyView';
import ListItemView from './components/ListItemView';
import TotalView from './components/TotalView';

function InvoiceApp() {
    const { invoice, total } = getInvoice();

    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');

    const [addItems, setAddItems] = useState(invoice.items);
    const [counter, setCounter] = useState(addItems.length + 1);

    //Auxiliares
    const clearInputs = () => {
        setProductValue('');
        setPriceValue('');
        setQuantityValue('');
    }

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
                        <ListItemView title={'Productos de la Factura'} items={addItems}></ListItemView>
                        <TotalView total={total}></TotalView>

                        <form onSubmit={event => {
                            event.preventDefault();
                            if(productValue.trim().length <=1) return;
                            if(priceValue.trim().length <0) return;
                            if(quantityValue.trim().length <0) return;

                            setAddItems([...addItems,
                            {
                                id: counter,
                                product: productValue,
                                price: +priceValue,
                                quantity: +quantityValue
                            }]);
                           
                            clearInputs();
                            setCounter(counter + 1);                          
                        }}>
                            <input type="text"
                                name="product"
                                value={productValue}
                                placeholder="Producto"
                                className="form-control m-4"
                                onChange={event => {
                                    console.log(event.target.value);
                                    setProductValue(event.target.value);
                                }} />

                            <input type="text"
                                name="price"
                                value={priceValue}
                                placeholder="Precio"
                                className="form-control m-4"
                                onChange={event => {
                                    console.log(event.target.value);
                                    setPriceValue(event.target.value);
                                }} />

                            <input type="text"
                                name="quantity"
                                value={quantityValue}
                                placeholder="Cantidad"
                                className="form-control m-4"
                                onChange={event => {
                                    console.log(event.target.value);
                                    setQuantityValue(event.target.value);
                                }} />

                            <button 
                                type="submit"
                                className="btn btn-primary m-3">Nuevo Item</button>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InvoiceApp