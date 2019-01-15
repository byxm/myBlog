import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
// import style from './style.scss';


class PopverLayer extends React.Component{
      static propTypes = {
           content:PropTypes.object 
      } 
      constructor(props){
          super(props);
          this.el = document.createElement('div');
          this.appRoot = document.getElementById('root');
      }

      componentDidMount(){
           this.appRoot.appendChild(this.el);
      }

      render(){
        const { children } = this.props;
          return ReactDOM.createPortal(
              children,
              this.el
          )
      }
}

export default PopverLayer;