import React,{PureComponent} from 'react';
import httpAjax from 'httpAjax';
import {connect} from 'react-redux';
import {getWebTitle,getArticleContent,getLoadingInfo} from '../../../redux/home.redux'
import style from './style.scss';


@connect(state=>({user:state.get('user')}),{getWebTitle,getArticleContent,getLoadingInfo})
class ArticleTitle extends PureComponent{
      constructor(props){
            super(props);
            this.state = {
                navData:[],
                currentTitle:0
            }
            this.handleArticleTitle = this.handleArticleTitle.bind(this);
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
            articleContent:{
                "/compareTechology":"/jishuContent",
                "/myLife":"/lifeContent",
                "/recommendBook":"/bookContent",
                "/conclude":"/concludeContent",
                "/aboutMe":"/meContent"
            }
      }

      componentDidMount(){
           const {location:{pathname},navAjaxApi,articleContent} = this.props;
           this.props.getLoadingInfo(true);
            httpAjax.ajax(navAjaxApi[pathname]).then(res=>{
                    this.setState({
                        navData:res.data
                    },()=>{
                        this.currentRef.current.style.opacity = 1;
                        this.currentRef.current.style.marginTop = 0;
                    })
                    this.props.getWebTitle(res.data[0].title);
                    document.title = this.props.user.get("webTitle");
            }).then(()=>{
                httpAjax.ajax(articleContent[pathname] + '?contentId=0').then(res=>{
                    this.props.getArticleContent(res.data.data);
                    this.props.getLoadingInfo(false);
                    }).catch(err=>{
                        console.error(err);
                    })
            }).catch(err=>{
                this.currentRef.current.style.paddingTop = 0;
                console.error(err);
            })
      }
      
      async handleArticleTitle(currentIndex,title){
          this.props.getLoadingInfo(true);//加载loading动画
          const {location:{pathname},articleContent} = this.props;
            document.title = title;
            try{
                const res = await httpAjax.ajax(articleContent[pathname] + '?contentId='+currentIndex+'');
                this.props.getArticleContent(res.data.data);
                this.props.getLoadingInfo(false);//取消loading动画
            }catch(err){
                console.error(err);
            }
            this.setState({
                currentTitle:currentIndex
            })
            
      }


      render(){
          return (
              <>                
                    <header className={style['article-title']}>
                        <h2>{this.props.user.get("articleTitle")}</h2>
                    </header>
              <nav ref={this.currentRef} className={style['article-title-content']}>
                    <ul>
                        {
                            this.state.navData.map((i,index)=><li
                                    key={i.contentIndex}
                                    className={style[`title-desc${index===this.state.currentTitle?"active":""}`]}
                                    onClick={()=>{this.handleArticleTitle(index,i.title)}}
                                >
                                    <i className="iconfont">&#xe6cc;</i> <span>{i.title}</span>
                            </li>)
                        }
                    </ul>
              </nav>
              </>
          )
      }
}

export default ArticleTitle;