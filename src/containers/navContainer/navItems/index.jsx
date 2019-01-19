import React from 'react';
import style from './style.scss';
import httpAjax from 'httpAjax';
import apiUrl from 'httpAjax/apiUrl';
import { Link,withRouter } from 'react-router-dom';
// import Pover from 'generalComponents/popverLayer'

@withRouter
class NavItems extends React.Component{
        constructor(props){
            super(props);
            this.handleClickItem = this.handleClickItem.bind(this);
            this.state = {
                isActive:0
            }
        }

        static defaultProps = {
            navList:[
                {label:"生活",icon:<i className="iconfont">&#xe61b;</i>,isActive:"",pathUrl:'/myLife'},
                {label:"技术",icon:<i className="iconfont">&#xe604;</i>,isActive:"",pathUrl:'/compareTechology'},
                {label:"荐书",icon:<i className="iconfont">&#xe809;</i>,isActive:"",pathUrl:'/recommendBook'},
                {label:"总结",icon:<i className="iconfont">&#xe682;</i>,isActive:"",pathUrl:'/conclude'},
                {label:"关于我",icon:<i className="iconfont">&#xe600;</i>,isActive:"",pathUrl:'/aboutMe'},
            ]
        }

        componentDidMount(){
            httpAjax.ajax(apiUrl.myLife).then(res => {
                    const {pathname} = this.props.location;
                    this.setState({
                        isActive:pathname
                    })
            })
            
        }
        handleClickItem(i){
           this.setState({isActive:i})
        }

        render(){
            const {navList} = this.props;
            const {isActive} = this.state;
            return (
                <>
                    <ul className={style['nav-item-box']}>
                        {
                            navList.map((i,index) => <Link to={i.pathUrl}  key={i.label}>
                                        <li 
                                            className={style[`nav-item-list${isActive===index?"active":isActive===i.pathUrl?"active":""}`]}
                                            onClick={() => {this.handleClickItem(index)}}
                                        >
                                        <p className={style['nav-item-flex']}>
                                            {i.icon}
                                            <span>{i.label}</span> 
                                        </p>
                                    </li>
                            </Link>
                            )
                        }
                        </ul>
                </>
            )
        }
}

export default NavItems;