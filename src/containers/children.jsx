import React from 'react';
import {connect} from 'react-redux';
import { addAge } from '../redux/user.redux'

class Children extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            count:0
        }
        this.i = 0;
    }

    handleClick(){
       
    }

    render(){

        return (
            <div>
                <div>
                    <button onClick={this.props.addAge}>点击我加1</button>
                    <button>点击我减1</button>
                    <button>点击我过一秒加1</button>
                </div>
                <p>{this.props.age} </p>
            </div>
        )
    }
}


export default connect(state=>state.user,{addAge})(Children);