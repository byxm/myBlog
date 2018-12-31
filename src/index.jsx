import React from 'react';
import ReactDOM from 'react-dom';
import style from './test.scss';
import xianjian from './xianjian.jpg';

class Hello extends React.Component{

    render(){
        return (
            <div>
                <h1 className={style.app}>hello world</h1>
                <img src={xianjian} alt=""/>
            </div>
        )
    }
}

 ReactDOM.render(<Hello />,document.getElementById('root'));