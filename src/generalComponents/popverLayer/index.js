import React from 'react';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';
import style from './style.scss';


class PopverLayer{

    constructor(){
        this.el = document.createElement('div');
    }

    Spin(props){
       return (
            createPortal(
                <div
                   className={style['pover-float-box']}
                >
                {props.children}
                </div>,
                document.body
            )
       )
    }
}

const Pover = new PopverLayer();

export default Pover;