import React, { useState } from 'react';

const Users = () => {
  const [selectedOption, setSelectedOption] = useState('none');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="users-page">
      <div className="side-menu">
        <h4>Menu</h4>
        <ul>
          <li className={selectedOption === 'all' ? 'selected' : ''} onClick={() => handleOptionChange('all')}>
            <div className="menu-item">All Users</div>
          </li>
          <li className={selectedOption === 'buyers' ? 'selected' : ''} onClick={() => handleOptionChange('buyers')}>
            <div className="menu-item">Buyers</div>
          </li>
          <li className={selectedOption === 'sellers' ? 'selected' : ''} onClick={() => handleOptionChange('sellers')}>
            <div className="menu-item">Sellers</div>
          </li>
        </ul>
      </div>
      <div className="main-content">
        {selectedOption === 'none' && (
          <div>
            <h2>Welcome to the Users Page!</h2>
            <p>Please select an option from the side menu.</p>
          </div>
        )}
        {selectedOption === 'all' && <AllUsers />}
        {selectedOption === 'buyers' && <Buyers />}
        {selectedOption === 'sellers' && <Sellers />}
      </div>
    </div>
  );
};

const AllUsers = () => <div>All Users component content</div>;
const Buyers = () => <div>Buyers component content</div>;
const Sellers = () => <div>Sellers component content</div>;

export default Users;