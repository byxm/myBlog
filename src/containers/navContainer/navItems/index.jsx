import React from 'react';
import style from './style.scss';


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
                {label:"生活",icon:<i className="iconfont">&#xe61b;</i>,isActive:""},
                {label:"技术",icon:<i className="iconfont">&#xe604;</i>,isActive:""},
                {label:"荐书",icon:<i className="iconfont">&#xe809;</i>,isActive:""},
                {label:"总结",icon:<i className="iconfont">&#xe682;</i>,isActive:""},
                {label:"关于我",icon:<i className="iconfont">&#xe600;</i>,isActive:""},
            ]
        }

        componentDidMount(){
                
        }
        handleClickItem(i){
           this.setState({isActive:i})
        }

        render(){
            const {navList} = this.props;
            const {isActive} = this.state;
            return (
                <ul className={style['nav-item-box']}>
                {
                        navList.map((i,index) => <li 
                                        className={style[`nav-item-list${isActive === index ? "active" : ""}`]}
                                        onClick={() => {this.handleClickItem(index)}}
                                        key={i.label}
                                    >
                                    <p className={style['nav-item-flex']}>
                                        {i.icon}
                                        <span>{i.label}</span> 
                                    </p>
                                </li>
                        )
                }
                </ul>
            )
        }
}

export default NavItems;