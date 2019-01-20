import React from 'react';
import httpAjax from 'httpAjax';
import {connect} from 'react-redux';
import style from './style.scss';


@connect(state=>({user:state.get('user')}))
class ArticleTitle extends React.Component{
      constructor(props){
            super(props);
            this.state = {
                navData:[]
            }
            this.currentRef = React.createRef();
      }
      static defaultProps = {
            navAjaxApi:{
                "/compareTechology":"/jishu",
                "/myLife":"/shenghuo",
                "/recommendBook":"/jianshu",
                "/conclude":"/concludeInfo",
                "/aboutMe":"/myPersonInfo"
            },
      }

      componentDidMount(){
           const {location:{pathname},navAjaxApi} = this.props;
            httpAjax.ajax(navAjaxApi[pathname]).then(res=>{
                    this.setState({
                        navData:res.data
                    },()=>{
                        this.currentRef.current.style.opacity = 1;
                        this.currentRef.current.style.paddingTop = 0;
                    })
            })
      }
      

      render(){
          return (
              <>                
                <div className={style['article-title']}>
                    <h2>{this.props.user.get("articleTitle")}</h2>
                </div>
                <ul ref={this.currentRef} className={style['article-title-content']}>
                    {
                        this.state.navData.map((i)=><li
                                key={i.contentIndex}
                                className={style['title-desc']}
                            >
                                <i className="iconfont">&#xe6cc;</i> <span>{i.title}</span>
                        </li>)
                    }
                </ul>
              </>
          )
      }
}

export default ArticleTitle;