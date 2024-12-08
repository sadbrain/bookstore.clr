import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { site_path } from "../../utils"

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const sampleCompanies = [
            { id: '1', name: 'Tech Innovations', streetAddress: '123 Tech Lane', strictAddress: 'Suite 101', city: 'Tech City', phoneNumber: '123-456-7890' },
            { id: '2', name: 'Creative Solutions', streetAddress: '456 Creative Blvd', strictAddress: '', city: 'Design City', phoneNumber: '987-654-3210' },
            { id: '3', name: 'Marketing Pros', streetAddress: '789 Marketing Ave', strictAddress: 'Building A', city: 'Business City', phoneNumber: '456-789-0123' },
            { id: '4', name: 'Global Enterprises', streetAddress: '101 Global Way', strictAddress: 'Floor 2', city: 'Global City', phoneNumber: '321-654-9870' },
            { id: '5', name: 'Retail Hub', streetAddress: '202 Retail St', strictAddress: '', city: 'Commerce City', phoneNumber: '654-321-0987' },
        ];
        setCompanies(sampleCompanies);
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
                removeCompany(id);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
               Swal.fire('Cancelled', 'Your Comp is safe :)', 'error');
            }
         });;

      
    };
    
    const removeCompany = async (id) => {
        setCompanies(prev => {
            const current = prev.filter(p => p.id !== id);
            return current;
        })
    }

    return (
        <div className="card shadow border-0 mt-4">
            <div className="card-header bg-secondary bg-gradient py-3 text-center">
                <h1 className="text-white">Company List</h1>
            </div>
            <div className="card-body p-4">
                <div className="container">
                    <div className="row pb-4">
                        <div className="col-6"></div>
                        <div className="col-6 text-end">
                            <Link to={site_path.COMPANY_CREATE} className="btn btn-primary">
                                <i className="pi pi-plus-circle"></i> Create New Company
                            </Link>
                        </div>
                    </div>
                    <DataTable
                        value={companies}
                        paginator
                        rows={5}
                        emptyMessage="There are no records to display"
                    >
                        <Column header="no" sortable  body={(rowData, { rowIndex }) => rowIndex + 1} style={{margin: "30px 0px"}}/>
                        <Column field="name" header="Name" sortable />
                        <Column field="streetAddress" header="Street Address" sortable />
                        <Column field="strictAddress" header="Strict Address" sortable />
                        <Column field="city" header="City" sortable />
                        <Column field="phoneNumber" header="Phone Number" sortable />
                        <Column
                            header="Actions"
                            body={(rowData) => (
                                <div className="btn-group" role="group">
                                    <Link to={`${site_path.COMPANY_UPDATE}/${rowData.id}`} className="btn btn-primary m-2">
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

export default CompanyList;