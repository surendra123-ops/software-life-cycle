import React from 'react';
import './index.css'


const Navbar = () => {
  return (
    <div className='nav-bar'>
      <img src="https://img.freepik.com/premium-vector/aircraft-lamp-logo-design-innovative-sleek-vector-concept_579306-26262.jpg?w=740"
       className='logo'
       alt="logo"
        />
      <button className='logout-btn'>Logout</button>
    </div>
  );
};

export default Navbar;
