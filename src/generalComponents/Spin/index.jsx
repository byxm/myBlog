import React from 'react';
import style from './style.scss';
import PropTypes from 'prop-types';
import loadingPic from 'assets/images/loading.gif';

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
                    <p className={style[`${loading?'spin-img':'spin-img-none'}`]}>
                        <img src={loadingPic} />
                    </p>
                    <p className={style[`${loading?'spin-text':'spin-text-none'}`]}>{tip?tip:''}</p>
                </div>
            </div>
        )
    }
}

export default Spin;