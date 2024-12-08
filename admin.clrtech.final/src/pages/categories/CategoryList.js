import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { site_path } from "../../utils"

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const sampleCategories = [
            { id: '11', name: 'Electronics', createdAt: '2023-01-01', updatedAt: '2023-01-10' },
            { id: '21', name: 'Books', createdAt: '2023-02-15', updatedAt: '2023-03-01' },
            { id: '31', name: 'Clothing', createdAt: '2023-03-20', updatedAt: '2023-04-05' },
            { id: '41', name: 'Home Appliances', createdAt: '2023-05-10', updatedAt: '2023-06-15' },
            { id: '51', name: 'Toys', createdAt: '2023-07-20', updatedAt: '2023-08-01' },
        ];
        setCategories(sampleCategories);
    }, []);

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                removeCategory(id);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
               Swal.fire('Cancelled', 'Your category is safe :)', 'error');
            }
         });

    };

    const removeCategory = async (id) => {
        setCategories(prev => {
            const current = prev.filter(p => p.id !== id);
            return current;
        })
    }

    return (
        <div className="card shadow border-0 mt-4">
            <div className="card-header bg-secondary bg-gradient py-3 text-center">
                <h1 className="text-white">Category List</h1>
            </div>
            <div className="card-body p-4">
                <div className="container">
                    <div className="row pb-4">
                        <div className="col-6"></div>
                        <div className="col-6 text-end">
                            <Link to={site_path.COMPANY_CREATE} className="btn btn-primary">
                                <i className="pi pi-plus-circle"></i> Create New Category
                            </Link>
                        </div>
                    </div>
                    <DataTable
                        value={categories}
                        paginator
                        rows={5}
                        emptyMessage="There are no records to display"
                    >
                        <Column header="no" sortable  body={(rowData, { rowIndex }) => rowIndex + 1} style={{margin: "30px 0px"}}/>
                        <Column field="name" header="Category Name" sortable />
                        <Column field="createdAt" header="Created At" sortable />
                        <Column field="updatedAt" header="Updated At" sortable />
                        <Column
                            header="Actions"
                            body={(rowData) => (
                                <div className="btn-group" role="group">
                                    <Link to={`${site_path.CATEGORY_UPDATE}/${rowData.id}`} className="btn btn-primary m-2">
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

export default CategoryList;
