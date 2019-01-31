import React from 'react';
import {connect} from 'react-redux';
import httpAjax from 'httpAjax';
import style from './style.scss'
import CopyRight from 'components/copyRight';


@connect(state=>({user:state.get('user')}))
class ArticleContent extends React.Component{
        constructor(props){
            super(props);
            this.contentBox = React.createRef();
            this.backToBtn = React.createRef();
            this.handleBackTitle = this.handleBackTitle.bind(this);
            this.handleBackTop = this.handleBackTop.bind(this);
            this.timer = null;
        }

        componentDidMount(){
            httpAjax.ajax('/articleContent?name=0').then(()=>{
            }).catch(err=>{
                console.error(err);
            })
             this.contentBox.current.addEventListener('scroll',()=>{
                this.throttle(this.handleScroll,this)
            });
        }

        handleBackTitle(){
            this.props.history.goBack();
        }

        throttle(method,context){//节流函数
        clearTimeout(method.tId);
        method.tId = setTimeout(()=>{
            method.call(context)
        },500)
    }


        handleScroll(){
            this.scrollTop  = this.contentBox.current.scrollTop;  //滚动条滚动高度
            const {current} = this.backToBtn;
            const {opacity} = document.defaultView.getComputedStyle(current,null);
            const iteratorProperty = (propObj) => {
                for(const key in propObj){
                    if (propObj.hasOwnProperty(key)) {
                        current.style[key] = propObj[key];
                    }
                }
            }
            if (this.scrollTop > 200 && opacity === "0") {
                const styleObj = {opacity:1,bottom:'1em',transition:'all .3s ease-in'};
                iteratorProperty(styleObj);
            }else if(this.scrollTop < 200 && opacity === '1'){
                const backObj = {opacity:0,bottom:'2em',transition:'all .3s ease-out'};
                iteratorProperty(backObj);
            }
        }

        handleBackTop(){
            const step = 7;
            this.timer = requestAnimationFrame(function fn(){
                    if(this.scrollTop>0){
                        const scrollNum = Math.floor(this.scrollTop / step);
                        this.scrollTop -= scrollNum;
                        this.contentBox.current.scrollTo(0,scrollNum);
                        this.timer = requestAnimationFrame(fn.bind(this));
                    }else {
                        this.contentBox.current.scrollTo(0,0)
                        cancelAnimationFrame(this.timer);
                    }
            }.bind(this))
        }

        render(){
            return (
                <div className={style['content-box']}>
                    <div className={style['content-header-title']}>
                            <span onClick={this.handleBackTitle} className={`iconfont ${style['arrow-left']}`}>&#xe606;</span>
                            <p className={style['title-word']}>{this.props.user.get("webTitle")}</p>
                    </div>
                    <div ref={this.contentBox} className={style['content-innner']}>
                            <p>
                            
                        </p>
                        <CopyRight/>
                    </div>
                    <p onClick={this.handleBackTop} ref={this.backToBtn} className={`${style['back-top']} iconfont`}>&#xe71a;</p>
                </div>
            )
        }
}


export default ArticleContent;