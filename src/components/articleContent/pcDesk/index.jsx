import React from 'react';
import style from './style.scss';
import CopyRight from 'components/copyRight';
import Spin from 'generalComponents/Spin';
import {connect} from 'react-redux';

@connect(state=>({user:state.get('user')}))
class ArticleContent extends React.Component{
    constructor(props){
        super(props);
        this.contentBox = React.createRef();
        this.backToBtn = React.createRef();
        this.shrinkBtn = React.createRef();
        this.handleBackTop = this.handleBackTop.bind(this);
        this.handleShrinkWeb = this.handleShrinkWeb.bind(this);
        this.timer = null;
        this.changeSize = true;
    }

    componentDidMount(){
        this.contentBox.current.addEventListener('scroll',()=>{
            this.throttle(this.handleScroll,this)
        });    
    }

    componentWillUnmount(){
        this.contentBox.current.removeEventListener('scroll',()=>{});
    }

    shouldComponentUpdate(nextProps){
        const {user} = this.props;
        if(
            user.get('articleContent') !== nextProps.user.get('articleContent') || 
            user.get('isLoading') !== nextProps.user.get('isLoading')
        )
        {
                return true;
        }else {
                return false;
        }
    }


    throttle(method,context){//节流函数
        clearTimeout(method.tId);
        method.tId = setTimeout(()=>{
            method.call(context)
        },500)
    }

    componentDidUpdate(){
        this.handleBackTop();//重新加载新的博客内容的时候重新回到博客顶部
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
        debugger;
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

    handleShrinkWeb(){
            const shrinkStyle = {width:0,transition:"all .3s ease-out"};
            const navBox = document.getElementById('nav-box-div');
            const titleBox = document.getElementById('title-box-div');
            const navContentBox = document.getElementById('nav-content-box');
        if(this.changeSize){
            this.shrinkBtn.current.style.transform = "rotateY(180deg)";
            for(const key in shrinkStyle){
                navBox.style[key] = shrinkStyle[key];
                titleBox.style[key] = shrinkStyle[key];
            }
            setTimeout(()=>{
                navContentBox.style.display = 'none';
                titleBox.style.display = 'none';
                this.contentBox.current.style.padding = "1.5em 10em 10em 10em";
            },100)
            this.changeSize = !this.changeSize;
        }else {
            this.shrinkBtn.current.style.transform = "rotateY(0deg)";
            navBox.style.transition = "all .3s ease-in";
            titleBox.style.transition = "all 1s ease-in";
            navBox.style.width = "12em";
            titleBox.style.width = "28em";
            setTimeout(()=>{
                navContentBox.style.display = 'block';
                titleBox.style.display = 'block';
                this.contentBox.current.style.padding = "1.5em";
            },200)
            this.changeSize = !this.changeSize;
        }
    }


    render(){
            const {user} = this.props;
            return  (
                <Spin loading={user.get('isLoading')} tip="博客内容获取中...">
                    <div ref={this.contentBox}  className={style['article-box']}>
                        <h2 className={style['article-title']}>{user.get('articleContent')?user.get('articleContent').articleTitle:""}</h2>
                        <div className={style['article-content']} dangerouslySetInnerHTML={{__html:user.get('articleContent')?user.get('articleContent').articleContent:""}}>                    
                        </div>
                        <CopyRight/>
                        <p onClick={this.handleBackTop} ref={this.backToBtn} className={`${style['back-top']} iconfont`}>&#xe71a;</p>
                        <p ref={this.shrinkBtn} onClick={this.handleShrinkWeb} className={`${style['shrink-web-btn']} iconfont`}>&#xe61f;</p>
                        </div>
                    </Spin>

            )           
    }
}


export default ArticleContent;