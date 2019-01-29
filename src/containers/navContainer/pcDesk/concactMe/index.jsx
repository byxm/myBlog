import React from 'react';
import {Message} from 'generalComponents';
import style from './style.scss';


class ConcactMe extends React.Component{

         handleToMyConcact(page,isNewPage="_blank"){
            if(isNewPage === "_self"){
                    Message.warning({
                        title:"提示",
                        content:'默认打开网易邮箱客户端',
                        onOk:()=>{window.open(page,isNewPage)},
                        onCancel:()=>{}
                    })
            }else {
                window.open(page,isNewPage)
            }            
        }
        handleTanChu = () => {
             Message.warning({
                        title:"提示",
                        content:'默认打开网易邮箱客户端',
                    })
        }
        render (){
                const concatMeList = [
                    {
                        id:1,
                        icon:<i className="iconfont">&#xe741;</i>,
                        concactPage:"https://github.com/byxm",
                        isNewPage:"_blank",
                        toolTip:"我的github"
                    },
                    {
                        id:2,
                        icon:<i className="iconfont">&#xe605;</i>,
                        concactPage:"Mailto:panyuximeng@163.com",
                        isNewPage:"_self",
                        toolTip:"我的邮箱"
                    }
                ]
                return (
                    <div className={style['concact-me-box']}>
                        {
                            concatMeList.map(i=>
                                <div 
                                    onClick={() => {this.handleToMyConcact(i.concactPage,i.isNewPage)}} 
                                    key={i.id}
                                    className={style['concact-me-content']}
                                >
                                    <div className={style['concact-tooltip']}>
                                        <span className={style['concact-text']}>{i.toolTip}</span>
                                        <p className={style['concact-bottom-arrow']}></p>
                                    </div>
                                    <p>{i.icon}</p>
                                </div>
                            )
                        }
                    </div>
                )
        }       
}
export default ConcactMe;