import React from 'react';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import  Users  from './UsersPage'
import './App.css';

// const Users = () => <div>Users component content</div>;
const Products = () => <div>Products component content</div>;

const ProfileDropdown = () => {
  return (
    <>
      <div className="profile-dropdown">
        <button>Admin Name <i className="fa fa-caret-down"></i></button>
        <div className="dropdown-content">
          <Link to="/profile">Profile</Link>
          <Link to="/LogOut">Log Out</Link>
          {/* <button onClick={handleSignOut}>Sign Out</button> */}
        </div>
      </div>
    </>
  );
};


const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
        {ProfileDropdown()}
      </nav>
    </>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
