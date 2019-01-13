import React from 'react';
import './reset.scss';
import style from './style.scss';
import MainNav from 'containers/navContainer'




class LayOut extends React.Component{
    
    componentDidMount() {
      
    }          

    render(){
        return (
            <div className={style['main-content-box']}>
                    <div className={style['main-layout']}>
                        <div className={style['main-nav']}>
                            <MainNav />
                        </div>   
                        <div className={style['main-title']}>  
                            标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
                        </div>
                        <div className={style['main-content']}>
                        
                        </div>
                    </div>
            </div>
        )
    }
}

export default LayOut;