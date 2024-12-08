import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { site_path, ORDER_STATUS, PAYMENT_STATUS } from "../../utils"

import "./OrderList.css";

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState('all');

    
    useEffect(() => {
        const sampleOrders = [
            { id: '1', name: 'John Doe', phoneNumber: '123-456-7890', email: 'john@example.com', orderStatus: 'In Process', orderTotal: 100.00 },
            { id: '2', name: 'Jane Smith', phoneNumber: '987-654-3210', email: 'jane@example.com', orderStatus: 'Payment Pending', orderTotal: 150.50 },
            { id: '3', name: 'Alice Johnson', phoneNumber: '555-123-4567', email: 'alice@example.com', orderStatus: 'Completed', orderTotal: 200.75 },
            { id: '4', name: 'Bob Brown', phoneNumber: '444-321-9870', email: 'bob@example.com', orderStatus: 'Approved', orderTotal: 300.00 },
        ];
        setOrders(sampleOrders);
    }, []);

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="text-center">
                <Button 
                    icon="pi pi-pencil" 
                    label="Detail" 
                    className="btn btn-primary m-2"
                    onClick={() => handleViewDetail(rowData.id)} 
                />
            </div>
        );
    };

    const handleViewDetail = (orderId) => {
        console.log(`View details for order ID: ${orderId}`);
    };

    return (
        <div className="card shadow border-0 my-4">
            <div className="card-header bg-secondary bg-gradient ml-0 py-3">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="text-white py-2">Order List</h2>
                    </div>
                </div>
            </div>
            <div className="card-body p-4">
                <div className="d-flex justify-content-between pb-5 pt-2 order-status-list">
                    <span></span>
                    <ul className="list-group list-group-horizontal-sm">
                        <Link
                            className={status === ORDER_STATUS.PROCESSING ? 'active order-status-link' : 'order-status-link'}
                            to={`${site_path.ORDER_LIST}?status=${ORDER_STATUS.PROCESSING.toLocaleLowerCase()}`}
                            onClick={() => setStatus(ORDER_STATUS.PROCESSING)}
                        >
                            <li className="list-group-item">In Process</li>
                        </Link>
                        <Link
                            className={status === PAYMENT_STATUS.PENDING ? 'active order-status-link' : 'order-status-link'}
                            to={`${site_path.ORDER_LIST}?status=${PAYMENT_STATUS.PENDING.toLocaleLowerCase()}`}
                            onClick={() => setStatus(PAYMENT_STATUS.PENDING)}
                        >
                            <li className="list-group-item ">Payment Pending</li>
                        </Link>
                        <Link
                            className={status === ORDER_STATUS.SHIPPED ? 'active order-status-link' : 'order-status-link'}
                            to={`${site_path.ORDER_LIST}?status=${ORDER_STATUS.SHIPPED.toLocaleLowerCase()}`}
                            onClick={() => setStatus(ORDER_STATUS.SHIPPED)}
                        >
                            <li className="list-group-item ">Completed</li>
                        </Link>
                        <Link
                            className={status === ORDER_STATUS.APPROVED ? 'active order-status-link' : 'order-status-link'}
                            to={`${site_path.ORDER_LIST}?status=${ORDER_STATUS.APPROVED.toLocaleLowerCase()}`}
                            onClick={() => setStatus(ORDER_STATUS.APPROVED)}
                        >
                            <li className="list-group-item ">Approved</li>
                        </Link>
                        <Link
                            className={status === 'all' ? 'active order-status-link' : 'order-status-link'}
                            to={`${site_path.ORDER_LIST}`}
                            onClick={() => setStatus('all')}
                        >
                            <li className="list-group-item {{$all}}">All</li>
                        </Link>
                    </ul>
                </div>
                <DataTable
                    value={orders}
                    paginator
                    rows={5}
                    emptyMessage="No orders found"
                >
                    <Column header="no" sortable body={(rowData, options) => (options.rowIndex + 1)} />
                    <Column field="name" header="Name" sortable />
                    <Column field="phoneNumber" header="Phone Number" sortable />
                    <Column field="email" header="Email" sortable />
                    <Column field="orderStatus" header="Status" sortable />
                    <Column field="orderTotal" header="Total" sortable />
                    <Column header="Actions" body={actionBodyTemplate} />
                </DataTable>
            </div>
        </div>
    );
};

export default OrderList;