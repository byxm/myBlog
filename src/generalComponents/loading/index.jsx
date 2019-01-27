import React from 'react';
import style from './style.scss';


const Loading = () => {
     return  <div className={style['loading-animation']}>
                <p className="iconfont">&#xe699;</p>
            </div>
}

export default Loading