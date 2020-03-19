import React from 'react';
import './header.css';


const Header = () => {
    return (
        <div className='container-header'>
            <img className="logo" alt="logo" src={require('../../img/logo1.png')}/>
        </div>
    );
}
export default Header;