import React from 'react';
// import PropTypes from 'prop-types';
import style from './style.scss';

class PopverLayer extends React.Component{
    //   static propTypes = {
    //        content:PropTypes.object.isRequired 
    //   }
   
      render(){
          return (
            <div className={style['floating-layer']}></div>
          )
      }
}

export default PopverLayer;