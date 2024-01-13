import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './sidebar.css'
import { useAuth } from "../../Context/auth";
import toast from "react-hot-toast";

const UserSidebar = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <div className=" p-3 text-bg-dark sticky" style={{ width: 280, height: '100vh' }}>
        <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
         <h4>Welcome</h4>
        </NavLink>
        <hr />
      
        <hr />
           <ul className="nav nav-pills flex-column mb-auto ">

          <NavLink to="/conference-enrollment" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i class="bi bi-exclude m-2"></i> 
             Join Conference
          </NavLink>
          <NavLink to="/blogs" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i class="bi bi-back m-2"></i>
             Previous Conferences
          </NavLink>
          <NavLink to="/all-conferences" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i class="bi bi-wallet m-2"></i> 
             All Conferences
          </NavLink>
          <NavLink to="/all-speakers" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i class="bi bi-megaphone-fill m-2"></i> 
             All Speakers
          </NavLink>
          <NavLink to="/all-sponsers" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i class="bi bi-person-workspace m-2"></i> 
             All Sponsers
          </NavLink>
          <NavLink to="/all-organizers" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i class="bi bi-buildings m-2"></i> 
             All Organizers
          </NavLink>
          <NavLink to="/our-reviewers" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i class="bi bi-yelp m-2"></i> 
             All Reviewers
          </NavLink>
          <NavLink to="/contact" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i class="bi bi-info-lg m-2"></i> 
             Customer Support
          </NavLink>


        </ul>
        <div className="dropdown">
          <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

            <strong>User</strong>
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <Link className="dropdown-item" to="#">Profile</Link>
            <hr className="dropdown-divider" />
            <Link className="dropdown-item" to="/login"  onClick={handleLogout}>Sign out</Link>
          </ul>
        </div>
      </div>



    </>
  )
}

export default UserSidebar
