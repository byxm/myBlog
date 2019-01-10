import React from 'react';
import style from './style.scss';

const ConcactMe = () => {
    const concatMeList = [{id:1,icon:<i className="iconfont">&#xe741;</i>},{id:2,icon:<i className="iconfont">&#xe605;</i>}]
    return (
            <div className={style['concact-me-box']}>
                {
                    concatMeList.map(i=>
                        <div key={i.id} className={style['concact-me-content']}><p>{i.icon}</p></div>
                    )
                }
            </div>
    )
}

export default ConcactMe;