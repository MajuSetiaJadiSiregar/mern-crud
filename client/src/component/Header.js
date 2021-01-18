import React from 'react';
import './Header.css';

const Header = () => {
   return(
      <nav className='header'>
         <div>
            <h1 className='title'>computer Store</h1>
         </div>
         <button className='button button-new'>
            Add Product
         </button>
      </nav>
   )
};
export default Header;