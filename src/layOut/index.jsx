import React from 'react';
import './reset.scss';
import style from './style.scss';
import MainNav from 'containers/navContainer'




class LayOut extends React.Component{
    
    componentDidMount() {
      
    }          

    render(){
        return (
                <div className={style['main-layout']}>
                    <div className={style['main-nav']}>
                        <MainNav />
                    </div>   
                    <div className={style['main-title']}>    
                    </div>
                    <div className={style['main-content']}></div>
                </div>
        )
    }
}

export default LayOut;