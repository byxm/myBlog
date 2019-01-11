import React from 'react';
import style from './style.scss';
// import {PopverLayer} from 'generalComponents';

class ConcactMe extends React.Component{

         handleToMyConcact(page,isNewPage="_blank"){
            window.open(page,isNewPage)
        }
        render (){
                const concatMeList = [
                    {
                        id:1,
                        icon:<i className="iconfont">&#xe741;</i>,
                        concactPage:"https://github.com/byxm",
                        isNewPage:"_blank"
                    },
                    {
                        id:2,
                        icon:<i className="iconfont">&#xe605;</i>,
                        concactPage:"Mailto:panyuximeng@163.com",
                        isNewPage:"_self"
                    }
                ]
                return (
                    <div className={style['concact-me-box']}>
                        {
                            concatMeList.map(i=>
                                // <PopverLayer>
                                    <div onClick={() => {this.handleToMyConcact(i.concactPage,i.isNewPage)}} key={i.id} className={style['concact-me-content']}>
                                        <p>{i.icon}</p>
                                    </div>
                                // </PopverLayer>
                            )
                        }
                       
                    </div>
                )
        }       
}
export default ConcactMe;