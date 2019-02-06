import React,{PureComponent} from 'react';
import httpAjax from 'httpAjax';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {getWebTitle,getCurrentIndex} from '../../../redux/home.redux';
import { cancelMaskerLayer } from 'utils';
import style from './style.scss';



@connect(state=>({user:state.get('user')}),{getWebTitle,getCurrentIndex})
class ArticleTitle extends PureComponent{
      constructor(props){
            super(props);
            this.state = {
                navData:[],
                currentTitle:"",
            }
            this.handleArticleTitle = this.handleArticleTitle.bind(this);
            this.handleSpreadMenu = this.handleSpreadMenu.bind(this);
            this.currentRef = React.createRef();
            this.menuArrow = React.createRef();
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
           const {location:{pathname},navAjaxApi,user} = this.props;
            httpAjax.ajax(navAjaxApi[pathname]).then(res=>{
                    this.setState({
                        navData:res.data,
                        currentTitle:user.get('currentIndex')
                    },()=>{
                        this.currentRef.current.style.opacity = 1;
                        this.currentRef.current.style.marginTop = 0;
                    })
                    this.props.getWebTitle(res.data[0].title);
                    document.title = this.props.user.get("webTitle");
            }).catch(err=>{
                this.currentRef.current.style.paddingTop = 0;
                console.error(err);
            })
      }
      
      handleArticleTitle(currentIndex,title){
            const {getWebTitle,getCurrentIndex} = this.props;
            document.title = title;
            getWebTitle(title);
            getCurrentIndex(currentIndex);
      }

      handleSpreadMenu(){
          cancelMaskerLayer(1,"block","block")
      }


      render(){
          const {match} = this.props;
          return (
              <>       
                <div className={style['article-title']}>
                    <h2>{this.props.user.get("articleTitle")}&nbsp;</h2>
                    <span 
                    onClick={this.handleSpreadMenu} 
                    className={`iconfont ${style['nav-menu']}`}
                    >
                        &#xe80a;
                    </span>
                </div>
                <ul ref={this.currentRef} className={style['article-title-content']}>
                    {
                        this.state.navData.map((i,index)=>
                            <Link  key={i.contentIndex} 
                            to={
                            {pathname:'/content',search:`?currentMenu=${match.url}&currentIndex=${i.id}`,query: {currentMenu:match.url,currentIndex:i.id}}
                            }>
                                <li
                                    className={style[`title-desc${index===this.state.currentTitle?"active":""}`]}
                                    onClick={()=>{this.handleArticleTitle(index,i.title)}}
                                >
                                    <i className="iconfont">&#xe6cc;</i> <span>{i.title}</span>
                                </li>
                            </Link>
                        )
                    }
                </ul>
              </>
          )
      }
}

export default ArticleTitle;