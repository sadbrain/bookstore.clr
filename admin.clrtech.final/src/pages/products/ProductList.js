import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { site_path } from "../../utils"

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const sampleProducts = [
            { id: '1', title: 'Laptop', isbn: '123-456-789', price: 999.99, author: 'John Doe', categoryId: { name: 'Electronics' }, createdAt: '2023-01-01', updatedAt: '2023-01-10' },
            { id: '2', title: 'JavaScript Book', isbn: '987-654-321', price: 29.99, author: 'Jane Smith', categoryId: { name: 'Books' }, createdAt: '2023-02-15', updatedAt: '2023-03-01' },
            { id: '3', title: 'T-Shirt', isbn: '654-321-987', price: 19.99, author: 'Fashion Co', categoryId: { name: 'Clothing' }, createdAt: '2023-03-20', updatedAt: '2023-04-05' },
            { id: '4', title: 'Vacuum Cleaner', isbn: '321-987-654', price: 199.99, author: 'HomeTech', categoryId: { name: 'Home Appliances' }, createdAt: '2023-05-10', updatedAt: '2023-06-15' },
            { id: '5', title: 'Building Blocks', isbn: '789-123-456', price: 49.99, author: 'ToyWorld', categoryId: { name: 'Toys' }, createdAt: '2023-07-20', updatedAt: '2023-08-01' },
        ];
        setProducts(sampleProducts);
    }, []);

    const handleDelete = async (id) => {
        await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                removeProduct(id);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
               Swal.fire('Cancelled', 'Your product is safe :)', 'error');
            }
         });

    };

    const removeProduct = async (id) => {
        setProducts(prev => {
            const current = prev.filter(p => p.id !== id);
            return current;
        })
    }

    return (
        <div className="card shadow border-0 mt-4">
            <div className="card-header bg-secondary bg-gradient py-3 text-center">
                <h1 className="text-white">Product List</h1>
            </div>
            <div className="card-body p-4">
                <div className="container">
                    <div className="row pb-4">
                        <div className="col-6"></div>
                        <div className="col-6 text-end">
                            <Link to={site_path.PRODUCT_CREATE} className="btn btn-primary">
                                <i className="pi pi-plus-circle"></i> Create New Product
                            </Link>
                        </div>
                    </div>
                    <DataTable
                        value={products}
                        paginator
                        rows={5}
                        emptyMessage="There are no records to display"
                    >
                        <Column header="no" sortable  body={(rowData, { rowIndex }) => rowIndex + 1} style={{margin: "30px 0px"}}/>
                        <Column field="title" header="Title" sortable />
                        <Column field="isbn" header="ISBN" sortable />
                        <Column field="price" header="Price" sortable />
                        <Column field="author" header="Author" sortable />
                        <Column field="categoryId.name" header="Category" sortable />
                        <Column
                            header="Actions"
                            body={(rowData) => (
                                <div className="btn-group" role="group">
                                    <Link to={`${site_path.PRODUCT_UPDATE}/${rowData.id}`} className="btn btn-primary m-2">
                                        <i className="pi pi-pencil"></i> Update
                                    </Link>
                                    <button onClick={() => handleDelete(rowData.id)} className="btn btn-danger m-2">
                                        <i className="pi pi-trash"></i> Delete
                                    </button>
                                </div>
                            )}
                        />
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
