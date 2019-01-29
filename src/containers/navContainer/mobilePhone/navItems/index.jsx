import React from 'react';
import style from './style.scss';
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {getArticleTitle}  from '../../../../redux/home.redux'
// import Pover from 'generalComponents/popverLayer'

@connect(null,{getArticleTitle})
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
                {label:"技术",icon:<i className="iconfont">&#xe604;</i>,isActive:"",pathUrl:'/compareTechology'},
                {label:"生活",icon:<i className="iconfont">&#xe61b;</i>,isActive:"",pathUrl:'/myLife'},
                {label:"荐书",icon:<i className="iconfont">&#xe809;</i>,isActive:"",pathUrl:'/recommendBook'},
                {label:"总结",icon:<i className="iconfont">&#xe682;</i>,isActive:"",pathUrl:'/conclude'},
                // {label:"关于我",icon:<i className="iconfont">&#xe600;</i>,isActive:"",pathUrl:'/aboutMe'},
            ]
        }

        componentDidMount(){
            const {location:{pathname},getArticleTitle,navList} = this.props;
            const nowPathname = pathname!=="/"?pathname:"/compareTechology";
            const currentTitle = navList.filter(i=>i.pathUrl===nowPathname)
            this.setState({
                isActive:nowPathname
            },()=>{
                const label = currentTitle.length>0 && currentTitle[0].hasOwnProperty('label')?currentTitle[0].label:""
                getArticleTitle(label)
            })
        }
        handleClickItem(i,label){
           this.setState({isActive:i},()=>{
               this.props.getArticleTitle(label)
           })
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
                                            onClick={() => {this.handleClickItem(index,i.label)}}
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