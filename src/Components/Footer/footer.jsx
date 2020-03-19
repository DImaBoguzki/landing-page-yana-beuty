import React from 'react';
import './footer.css';
import * as contfig from '../../config-page';

const AppStore = () => {
    return (
        <div className='container-footer'>
            <div className='link-container-footer'>
                <a className='item' href={contfig.FACEBOOK} target="_blank" rel="noopener noreferrer" alt='ios'>
                    <img src={require('../../img/icon/facebook_icon.png')} alt="facebook" style={{width:'10vw',height:'10vw'}}/>
                </a>
                <a className='item' href={contfig.INSTAGRAM} target="_blank" rel="noopener noreferrer" alt='android'>
                    <img src={require('../../img/icon/Instagram_icon.png')} alt="instagram" style={{width:'10vw',height:'10vw'}}/>
                </a>
            </div>
            <h4>יש לי גם אפליקציה לזימון תור</h4>
            <div className='link-container-footer'>
                <a className='item' href={contfig.IOS} target="_blank" rel="noopener noreferrer" alt='ios'>
                    <img src={require('../../img/icon/ios.png')} alt="ios"/>
                </a>
                <a className='item' href={contfig.ANDROID} target="_blank" rel="noopener noreferrer" alt='android'>
                    <img src={require('../../img/icon/android.png')} alt="ios"/>
                </a>
            </div>
            <div className='info'>
                <span>Copyright © 2020 Boguzki | Powered by Boguzki</span>
            </div>
        </div>
    )
}
export default AppStore;

