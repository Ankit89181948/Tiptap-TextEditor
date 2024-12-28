import React from 'react';
import logo  from './logo/logo.png';

const Header = () => {
  return (
    <header className="bg-dark text-white py-2 mb-2 d-flex  align-items-center justify-content-start ">
    
        <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '30px', marginRight: '15px' ,marginLeft:'10px'}} />
        <h2 className="text-center">Tiptap Text Editor</h2>
      
    </header>
  );
};

export default Header;
