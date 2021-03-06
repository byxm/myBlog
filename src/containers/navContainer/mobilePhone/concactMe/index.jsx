import React from 'react';
import style from './style.scss';


class ConcactMe extends React.Component{

         handleToMyConcact(page,isNewPage="_blank"){
            if (isNewPage === '_self') {
                //异步动态加载Message框，提示性能
                import(/* webpackPrefetch:true */ 'generalComponents').then(mod=>{
                    mod.Message.warning({
                        title:"访问提示",
                        content:`将要访问您的手机邮箱,我的邮箱：panyuximeng@163.com`,
                        onOk:()=>{window.open(page,isNewPage)},
                        onCancel:()=>{}
                    })
                })
            }else {
                window.open(page,isNewPage)
            }
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