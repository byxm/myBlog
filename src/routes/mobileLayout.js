import React from 'react';
import { BrowserRouter,Route,Switch,Redirect,HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import reducer from '../redux';
import { cancelMaskerLayer } from 'utils';
import routerConfig,{lazyLoad} from '../lazyLoad/mobile'
import styleMobile from './styleMobile.scss';
import './reset.scss';
import thunk from 'redux-thunk';

import MainNav from 'containers/navContainer/mobilePhone'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
        applyMiddleware(thunk)
))

const NotFound = lazyLoad(()=>import("components/NotFound"));
const ArticleContent = lazyLoad(()=>import("components/articleContent/mobilePhone"));


const cancelMaskLayer = () => {
    cancelMaskerLayer(0,"none","none");
}

const Router = process.env.NODE_ENV === "development" ? BrowserRouter : HashRouter;//开发环境下使用BrowerRouter,服务器生产环境下使用HashRouter

const MobileLayout = () => {
    return <Provider store={store}>
            <Router>
                <div className={styleMobile['main-content-box']}>
                    <div className={styleMobile['main-layout']}>
                        <div id="main-nav-mobile" className={styleMobile['main-nav']}>
                            <MainNav />
                        </div>   
                              <div className={styleMobile['main-title']}>  
                                    <Switch>
                                        {
                                                routerConfig.map(i => { 
                                                    return  <Route  
                                                                key={i.pathUrl}
                                                                path={i.pathUrl} 
                                                                component={i.component}
                                                            />
                                                }
                                            )
                                        }
                                        <Route path="/content/:currentMenu:createTime" component={ArticleContent} />
                                        <Route exact path="/" render={()=><Redirect to="/compareTechology" />} />
                                        <Route component={NotFound} />
                                    </Switch>
                                <div onClick={cancelMaskLayer} id="mask-layer-box" className={styleMobile['mask-layer']}>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
 </Provider>
}

export default MobileLayout;




