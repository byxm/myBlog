import React from 'react';
import PropTypes from 'prop-types';
// import style from './style.scss';

class PopverLayer extends React.Component{
      static propTypes = {
           content:PropTypes.object 
      } 
   
      componentDidMount(){
          
      }

      render(){
        const { children } = this.props;
        // console.log(children)
          return (
            <>
                {children}            
            </>
          )
      }
}

export default PopverLayer;