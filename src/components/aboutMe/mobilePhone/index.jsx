import React from 'react';
import httpAjax from 'httpAjax';
import style from './style.scss';


class AboutMe extends React.Component{
    constructor(props){
        super(props);
        this.nodeMe = React.createRef();
        this.state = {
            content:""
        }
    }

    componentDidMount(){
        httpAjax.ajax('/meContent' + '?contentId=0').then(res=>{
                this.setState({
                    content:res.data.data.articleContent
                },()=>{
                    this.nodeMe.current.style.marginTop = 0;
                    this.nodeMe.current.style.opacity = 1;
                })
        }).catch(err=>{
            console.error(err);
        })
    }

    backTo = () => {
        this.props.history.goBack();
    }

    render(){
        return (
            <div className={style['about-me-div']}>
                <div className={style['header-box']}>
                    <span onClick={this.backTo} className="iconfont">&#xe606;</span>
                    <h2 className={style['person-resume']}>个人简介</h2>
                </div>
                <div ref={this.nodeMe} className={style['about-content']}>
                    <div className={style['about-content-inner']} dangerouslySetInnerHTML={{__html:this.state.content}}></div>
                </div>
            </div>
        )
    }
}

export default AboutMe;