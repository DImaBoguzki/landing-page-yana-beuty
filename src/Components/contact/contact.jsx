import React from 'react';
import './contact.css';
import * as contfig from '../../config-page';


const Contact = () => {
    return (
        <div className='contact-container'>
            <a className='contact-item' href={contfig.WHATSAPP} target="_blank" rel="noopener noreferrer">
                <img src={require('../../img/icon/icons-whatsapp-240.png')} alt="whatsap"/>
                <p>WhatsApp</p>
            </a>
            <a className='contact-item' href={contfig.WAZE} target="_blank" rel="noopener noreferrer">
                <img src={require('../../img/icon/icons-waze-240.png')} alt="waze"/>
                <p>נווט אליי</p>
            </a>
            <div className='contact-item' style={{cursor:'context-menu'}}>
                <img src={require('../../img/icon/icons-phone-240.png')} alt="waze"/>
                <p style={{cursor:'pointer'}}>{contfig.PHONE}</p>
            </div>
        </div>
        
    );
}


export default Contact;