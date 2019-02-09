import React from 'react';
import style from './style.scss';
import {Link} from 'react-router-dom';
import panyu from 'assets/images/panyu.jpg';

class MyPhoto extends React.Component{
    constructor(props){
        super(props);
        this.myPhoto = React.createRef();
    }

    render(){
        return (
            <Link to="/aboutMe">
                <div ref={this.myPhoto} className={style['nav-content-logo']}>
                    <img src={panyu} alt="紫英头像"/>
                </div>
            </Link>
        )
    }
}

export default MyPhoto