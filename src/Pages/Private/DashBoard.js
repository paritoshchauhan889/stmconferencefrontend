import React from 'react';
import { useAuth } from '../../Context/auth';
import UserSidebar from '../../Components/Layout/UserMenu';

const Dashboard = () => {
  const [auth] = useAuth();

  return (
<div className="d-flex">
<div className="col-md-4">
<UserSidebar/>

</div>
<div className="col-md-8">
<div className="container">
<div className="card p-3">
  <h5>User Name: {auth?.user?.name}</h5>
  <h5>User Email: {auth?.user?.email}</h5>
  {auth?.user?.role === 0 && <h5>User Role: User</h5>}
  {auth?.user?.role === 1 && <h5>User Role: Admin</h5>}
  {auth?.user?.role === 2 && <h5>User Role: Manager</h5>}
</div>

<h1>
Work In Process
</h1>
</div>
</div>
</div>
  );
};

export default Dashboard;

