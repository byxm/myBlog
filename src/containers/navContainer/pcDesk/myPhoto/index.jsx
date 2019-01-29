import React from 'react';
import style from './style.scss';
import {withRouter} from 'react-router-dom';
import ziyin from 'assets/images/ziyin.jpg';
import {connect} from 'react-redux';
import {getPathUrl} from '../../../../redux/home.redux'


@withRouter
@connect(null,{getPathUrl})
class MyPhoto extends React.Component{
    constructor(props){
        super(props);
        this.handleToMyHome = this.handleToMyHome.bind(this);
        this.myPhoto = React.createRef();
        this.state = {
            angle:0
        }
    }

    handleToMyHome(){
        this.setState(prevState=>({angle:prevState.angle+360}),()=>{
                const {history,getPathUrl} = this.props;
                this.myPhoto.current.style.transform = `rotate(${this.state.angle}deg)`;
                history.push({pathname:'/aboutMe',isJumpTo:true});
                getPathUrl('/aboutMe');
        })
    }      

    render(){
        return (
                <div ref={this.myPhoto} onClick={this.handleToMyHome} className={style['nav-content-logo']}>
                    <img src={ziyin} alt="紫英头像"/>
                </div>
        )
    }
}


export default MyPhoto