import React from 'react';
import style from './style.scss';
import PropTypes from 'prop-types';
import loadingPic from 'assets/images/loading.gif';

/**
 * 目前封装的这个效果只能够适合包裹在最外层的全局组件，局部包括会影响子组件的样式，后期优化
 * **/

class Spin extends React.Component{
    static propTypes = {
        loading:PropTypes.bool,
        tip:PropTypes.string
    }

    componentDidMount(){

    }

    render(){
        const {loading,tip} = this.props;
        return (
            <div className={style['spin-box']}>
                {this.props.children}
                <div className={style[`${loading?'spin-loading':''}`]}>
                    <div className={style['spin-inner-box']}>
                        <p className={style[`${loading?'spin-img':'spin-img-none'}`]}>
                            <img src={loadingPic} />
                        </p>
                        <p className={style[`${loading?'spin-text':'spin-text-none'}`]}>{tip?tip:''}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Spin;