import React from 'react';
import {connect} from 'react-redux';
import httpAjax from 'httpAjax';
import style from './style.scss';


@connect(state=>({user:state.get('user')}))
class ArticleContent extends React.Component{
        constructor(props){
            super(props);
            this.handleBackTitle = this.handleBackTitle.bind(this);
        }

        componentDidMount(){
            httpAjax.ajax('/articleContent?name=0').then(()=>{
            }).catch(err=>{
                console.error(err);
            })
        }

        handleBackTitle(){
            this.props.history.goBack();
        }

        render(){
            return (
                <div className={style['content-box']}>
                    <div className={style['content-header-title']}>
                            <span onClick={this.handleBackTitle} className={`iconfont ${style['arrow-left']}`}>&#xe606;</span>
                            <p className={style['title-word']}>{this.props.user.get("webTitle")}</p>
                    </div>
                        <p>
                        孔令贤，2011年4月份毕业于西安电子科技大学通信工程学院信息安全专业，专业课程比较杂乱，又学通信工程又学计算机。在学校的时候零零散散的自学过C语言、Java、MFC、Javascript、汇编……，做过小软件，写过小木马和小病毒，除了钻研精神，自认为没有一技之长。
                        硕士临近毕业时在腾讯安全中心实习过3个月，因家庭原因没有留在深圳，毕业直接进了华为。                
                        2011.03.28~2015.11.17，就职于华为技术有限公司西安研究所，隶属IT产品线云操作系统产品部，四年多的时间从一名基层员工成长为团队Lead，负责OpenStack开源社区运作。所以，无论在思维，还是在工作方式上，基本已经打上了华为的烙印。在公司一直顺风顺水，并无经受大的历练，也并无见过大的世面，只是凭借自己的努力，踏踏实实做该做的事情。于2015年底从华为离职。
                        2016.01.18至今，作为一名Senior Engineer就职于一家新西兰公司（Catalyst IT）的云计算部门。Catalyst是一家基于开源软件的本地IT企业，有着自由、开放的公司文化，我很喜欢。
                        联系方式：
                    </p>
                </div>
            )
        }
}


export default ArticleContent;