import React from 'react';
import { useAuth } from '../../Context/auth';
import ManagerSidebar from '../../Components/Layout/ManagerMenu';

const ManagerDashboard = () => {
  const [auth] = useAuth();

  return (
    <div className="d-flex">
    <div className="col-md-3">
             <ManagerSidebar/>
           </div>
   <div className="col-md-9">
   <div className="container">
   <div className="card" style={{width: '18rem'}}>
     <div className="card-header">
       User Details
     </div>
     <ul className="list-group list-group-flush">
       <li className="list-group-item"> <h5>Name: {auth?.user?.name}</h5></li>
       <li className="list-group-item"> <h5>Email: {auth?.user?.email}</h5></li>
       <li className="list-group-item"> {auth?.user?.role === 0 && <h5>User Role: User</h5>}</li>
       <li className="list-group-item">{auth?.user?.role === 1 && <h5>User Role: Admin</h5>}</li>
       <li className="list-group-item">{auth?.user?.role === 2 && <h5>Role: Manager</h5>}</li>
     </ul>
   </div>
   </div>
   </div>
    </div>
  );
};

export default ManagerDashboard;
