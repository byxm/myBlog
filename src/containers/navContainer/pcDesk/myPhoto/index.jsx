import React from 'react';
import style from './style.scss';
import ziyin from 'assets/images/ziyin.jpg';

let myPhoto,angle=360;
const handleToMyHome = () =>{
    myPhoto.style.transform = `rotate(${angle}deg)`;
    angle += 360;
}

const MyPhoto = () => {
    return (
            <div ref={node=>myPhoto=node} onClick={handleToMyHome} className={style['nav-content-logo']}>
                <img src={ziyin} alt="紫英头像"/>
            </div>
    )
}

export default MyPhoto