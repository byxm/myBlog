import React from 'react';
import style from './style.scss';



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
            },200)
            this.changeSize = !this.changeSize;
        }
    }


    render(){
            return  <div ref={this.contentBox}  className={style['article-box']}>
                <p>
                        孔令贤，2011年4月份毕业于西安电子科技大学通信工程学院信息安全专业，专业课程比较杂乱，又学通信工程又学计算机。在学校的时候零零散散的自学过C语言、Java、MFC、Javascript、汇编……，做过小软件，写过小木马和小病毒，除了钻研精神，自认为没有一技之长。

                硕士临近毕业时在腾讯安全中心实习过3个月，因家庭原因没有留在深圳，毕业直接进了华为。

                2011.03.28~2015.11.17，就职于华为技术有限公司西安研究所，隶属IT产品线云操作系统产品部，四年多的时间从一名基层员工成长为团队Lead，负责OpenStack开源社区运作。所以，无论在思维，还是在工作方式上，基本已经打上了华为的烙印。在公司一直顺风顺水，并无经受大的历练，也并无见过大的世面，只是凭借自己的努力，踏踏实实做该做的事情。于2015年底从华为离职。

                2016.01.18至今，作为一名Senior Engineer就职于一家新西兰公司（Catalyst IT）的云计算部门。Catalyst是一家基于开源软件的本地IT企业，有着自由、开放的公司文化，我很喜欢。

                联系方式：
                孔令贤，2011年4月份毕业于西安电子科技大学通信工程学院信息安全专业，专业课程比较杂乱，又学通信工程又学计算机。在学校的时候零零散散的自学过C语言、Java、MFC、Javascript、汇编……，做过小软件，写过小木马和小病毒，除了钻研精神，自认为没有一技之长。

                硕士临近毕业时在腾讯安全中心实习过3个月，因家庭原因没有留在深圳，毕业直接进了华为。

                2011.03.28~2015.11.17，就职于华为技术有限公司西安研究所，隶属IT产品线云操作系统产品部，四年多的时间从一名基层员工成长为团队Lead，负责OpenStack开源社区运作。所以，无论在思维，还是在工作方式上，基本已经打上了华为的烙印。在公司一直顺风顺水，并无经受大的历练，也并无见过大的世面，只是凭借自己的努力，踏踏实实做该做的事情。于2015年底从华为离职。

                2016.01.18至今，作为一名Senior Engineer就职于一家新西兰公司（Catalyst IT）的云计算部门。Catalyst是一家基于开源软件的本地IT企业，有着自由、开放的公司文化，我很喜欢。

                联系方式：
                孔令贤，2011年4月份毕业于西安电子科技大学通信工程学院信息安全专业，专业课程比较杂乱，又学通信工程又学计算机。在学校的时候零零散散的自学过C语言、Java、MFC、Javascript、汇编……，做过小软件，写过小木马和小病毒，除了钻研精神，自认为没有一技之长。

                硕士临近毕业时在腾讯安全中心实习过3个月，因家庭原因没有留在深圳，毕业直接进了华为。

                2011.03.28~2015.11.17，就职于华为技术有限公司西安研究所，隶属IT产品线云操作系统产品部，四年多的时间从一名基层员工成长为团队Lead，负责OpenStack开源社区运作。所以，无论在思维，还是在工作方式上，基本已经打上了华为的烙印。在公司一直顺风顺水，并无经受大的历练，也并无见过大的世面，只是凭借自己的努力，踏踏实实做该做的事情。于2015年底从华为离职。

                2016.01.18至今，作为一名Senior Engineer就职于一家新西兰公司（Catalyst IT）的云计算部门。Catalyst是一家基于开源软件的本地IT企业，有着自由、开放的公司文化，我很喜欢。

                联系方式：
                孔令贤，2011年4月份毕业于西安电子科技大学通信工程学院信息安全专业，专业课程比较杂乱，又学通信工程又学计算机。在学校的时候零零散散的自学过C语言、Java、MFC、Javascript、汇编……，做过小软件，写过小木马和小病毒，除了钻研精神，自认为没有一技之长。

                硕士临近毕业时在腾讯安全中心实习过3个月，因家庭原因没有留在深圳，毕业直接进了华为。

                2011.03.28~2015.11.17，就职于华为技术有限公司西安研究所，隶属IT产品线云操作系统产品部，四年多的时间从一名基层员工成长为团队Lead，负责OpenStack开源社区运作。所以，无论在思维，还是在工作方式上，基本已经打上了华为的烙印。在公司一直顺风顺水，并无经受大的历练，也并无见过大的世面，只是凭借自己的努力，踏踏实实做该做的事情。于2015年底从华为离职。

                2016.01.18至今，作为一名Senior Engineer就职于一家新西兰公司（Catalyst IT）的云计算部门。Catalyst是一家基于开源软件的本地IT企业，有着自由、开放的公司文化，我很喜欢。

                联系方式：
                孔令贤，2011年4月份毕业于西安电子科技大学通信工程学院信息安全专业，专业课程比较杂乱，又学通信工程又学计算机。在学校的时候零零散散的自学过C语言、Java、MFC、Javascript、汇编……，做过小软件，写过小木马和小病毒，除了钻研精神，自认为没有一技之长。

                硕士临近毕业时在腾讯安全中心实习过3个月，因家庭原因没有留在深圳，毕业直接进了华为。

                2011.03.28~2015.11.17，就职于华为技术有限公司西安研究所，隶属IT产品线云操作系统产品部，四年多的时间从一名基层员工成长为团队Lead，负责OpenStack开源社区运作。所以，无论在思维，还是在工作方式上，基本已经打上了华为的烙印。在公司一直顺风顺水，并无经受大的历练，也并无见过大的世面，只是凭借自己的努力，踏踏实实做该做的事情。于2015年底从华为离职。

                2016.01.18至今，作为一名Senior Engineer就职于一家新西兰公司（Catalyst IT）的云计算部门。Catalyst是一家基于开源软件的本地IT企业，有着自由、开放的公司文化，我很喜欢。

                联系方式：
                孔令贤，2011年4月份毕业于西安电子科技大学通信工程学院信息安全专业，专业课程比较杂乱，又学通信工程又学计算机。在学校的时候零零散散的自学过C语言、Java、MFC、Javascript、汇编……，做过小软件，写过小木马和小病毒，除了钻研精神，自认为没有一技之长。

                硕士临近毕业时在腾讯安全中心实习过3个月，因家庭原因没有留在深圳，毕业直接进了华为。

                2011.03.28~2015.11.17，就职于华为技术有限公司西安研究所，隶属IT产品线云操作系统产品部，四年多的时间从一名基层员工成长为团队Lead，负责OpenStack开源社区运作。所以，无论在思维，还是在工作方式上，基本已经打上了华为的烙印。在公司一直顺风顺水，并无经受大的历练，也并无见过大的世面，只是凭借自己的努力，踏踏实实做该做的事情。于2015年底从华为离职。

                2016.01.18至今，作为一名Senior Engineer就职于一家新西兰公司（Catalyst IT）的云计算部门。Catalyst是一家基于开源软件的本地IT企业，有着自由、开放的公司文化，我很喜欢。

                联系方式：
                孔令贤，2011年4月份毕业于西安电子科技大学通信工程学院信息安全专业，专业课程比较杂乱，又学通信工程又学计算机。在学校的时候零零散散的自学过C语言、Java、MFC、Javascript、汇编……，做过小软件，写过小木马和小病毒，除了钻研精神，自认为没有一技之长。

                硕士临近毕业时在腾讯安全中心实习过3个月，因家庭原因没有留在深圳，毕业直接进了华为。

                2011.03.28~2015.11.17，就职于华为技术有限公司西安研究所，隶属IT产品线云操作系统产品部，四年多的时间从一名基层员工成长为团队Lead，负责OpenStack开源社区运作。所以，无论在思维，还是在工作方式上，基本已经打上了华为的烙印。在公司一直顺风顺水，并无经受大的历练，也并无见过大的世面，只是凭借自己的努力，踏踏实实做该做的事情。于2015年底从华为离职。

                2016.01.18至今，作为一名Senior Engineer就职于一家新西兰公司（Catalyst IT）的云计算部门。Catalyst是一家基于开源软件的本地IT企业，有着自由、开放的公司文化，我很喜欢。

                联系方式：
                </p>
                <p onClick={this.handleBackTop} ref={this.backToBtn} className={`${style['back-top']} iconfont`}>&#xe71a;</p>
                <p ref={this.shrinkBtn} onClick={this.handleShrinkWeb} className={`${style['shrink-web-btn']} iconfont`}>&#xe61f;</p>
        </div>
           
    }
}


export default ArticleContent;