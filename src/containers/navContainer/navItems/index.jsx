import React from 'react';
import style from './style.scss';


class NavItems extends React.Component{

        componentDidMount(){
            
        }

        render(){
            return (
                <ul className={style['nav-item-box']}>
                    <li>
                        <span className="iconfont">&#xe809;</span>
                        <span></span>
                    </li>
                </ul>
            )
        }
}

export default NavItems;