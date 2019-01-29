import React from 'react';
import style from './style.scss';


class AboutMe extends React.Component{
    constructor(props){
        super(props);
        this.nodeMe = React.createRef();
    }

    backTo = () => {
        this.props.history.goBack();
    }

    render(){
        return (
            <div ref={this.nodeMe} className={style['about-me-div']}>
                <div className={style['header-box']}>
                    <span onClick={this.backTo} className="iconfont">&#xe606;</span>
                    <h2 className={style['person-resume']}>个人简介</h2>
                </div>
                <div>
                    文字显示文字显示文字显示文字显示文字显示文字显示文字显示文字显示
                </div>
            </div>
        )
    }
}

export default AboutMe;