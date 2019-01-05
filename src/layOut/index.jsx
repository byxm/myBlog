import React from 'react';
import './reset.scss';
import style from './style.scss';

class LayOut extends React.Component{

    render(){
        return (
            <div className={style['main-layout']}>
                <div className={style['main-nav']}>101012</div>
                <div className={style['main-content']}>324102124</div>
            </div>
        )
    }
}

export default LayOut