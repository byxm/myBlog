import React from 'react';
import style from './style.scss';
import ziyin from 'assets/images/ziyin.jpg';


const MyPhoto = () => {
    return (
            <div className={style['nav-content-logo']}>
                <img src={ziyin} alt="紫英头像"/>
            </div>
    )
}

export default MyPhoto