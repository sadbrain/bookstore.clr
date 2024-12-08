import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Swal from 'sweetalert2';
import { site_path } from "../../utils"

const UserList = () => {
    const [users, setUsers] = useState([]);
    const today = new Date();

    useEffect(() => {
        const sampleUsers = [
            { id: '1', name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', company: 'Tech Innovations', role: 'Admin', lockout: null},
            { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', company: 'Web Solutions', role: 'User', lockout: new Date('2025-09-15') },
            { id: '3', name: 'Alice Johnson', email: 'alice@example.com', phone: '555-123-4567', company: 'Marketing Inc.', role: 'Editor', lockout: new Date('2025-10-10') },
        ]; 
        setUsers(sampleUsers);
    }, []);

    const handleLockUnlock = async (userId) => {
        const user = users.find(u => u.id === userId);
        let isLocked = false;
        if(user.lockout !== null) isLocked = user.lockout > today;
        const action = isLocked ? 'unlock' : 'lock';
        const confirmAction = await Swal.fire({
            title: `Are you sure you want to ${action} this user?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: `Yes, ${action} it!`,
        });

        if (confirmAction.isConfirmed) {
            setUsers(prevUsers => prevUsers.map(u => 
                u.id === userId ? { ...u, lockout: isLocked ? null : new Date('2025-12-31') } : u
            ));
        }
    };
    
    const actionBodyTemplate = (rowData) => {
        let isLocked = false;
        if(rowData.lockout !== null) isLocked = rowData.lockout > today;
        return (
            <div className="text-center">
                <a onClick={() => handleLockUnlock(rowData.id)} className={`btn ${isLocked ? 'btn-danger' : 'btn-success'} text-white m-2`} style={{ cursor: 'pointer', width: '100px' }}>
                    <i className={`bi ${isLocked ? 'bi-lock-fill' : 'bi-unlock-fill'}`}></i> {isLocked ? 'Unlock' : 'Lock'}
                </a>
                <a href={`${site_path.USER_CHANGE_PERMISSION}?userId=${rowData.id}`} className="btn btn-danger text-white m-2" style={{ cursor: 'pointer', width: '150px' }}>
                    <i className="bi bi-pencil-square"></i> Permission
                </a>
            </div>
        );
    };

    return (
        <div className="card shadow border-0 mt-4">
            <div className="card-header bg-secondary bg-gradient py-3 text-center">
                <h2 className="text-white">User List</h2>
            </div>
            <div className="card-body p-4">
                <DataTable
                    value={users}
                    paginator
                    rows={5}
                    emptyMessage="No users found"
                >
                    <Column header="no" sortable  body={(rowData, { rowIndex }) => rowIndex + 1} style={{margin: "30px 0px"}}/>
                    <Column field="name" header="Name" sortable />
                    <Column field="email" header="Email" sortable />
                    <Column field="phone" header="Phone" sortable />
                    <Column field="company" header="Company" sortable />
                    <Column field="role" header="Role" sortable />
                    <Column header="Actions" body={actionBodyTemplate} />
                </DataTable>
            </div>
        </div>
    );
};

export default UserList;