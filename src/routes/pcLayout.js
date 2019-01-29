import React from 'react';
import { BrowserRouter,Route,Switch,Redirect,HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import reducer from '../redux';
import routerConfig,{lazyLoad} from '../lazyLoad'
import style from './style.scss';
import './reset.scss';
import thunk from 'redux-thunk';

// import MainNav from 'containers/navContainer/pcDesk';
// import ArticleContent from 'components/articleContent/pcDesk';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
        applyMiddleware(thunk)
))

const MainNav = lazyLoad(()=>import("containers/navContainer/pcDesk"));
const ArticleContent = lazyLoad(()=>import("components/articleContent/pcDesk"))
const NotFound = lazyLoad(()=>import("components/NotFound"));

const Router = process.env.NODE_ENV === "development" ? BrowserRouter : HashRouter;//开发环境下使用BrowerRouter,服务器生产环境下使用HashRouter

const PCLayout = () => {
    return <Provider store={store}>
            <Router>
                <div className={style['main-content-box']}>
                    <div className={style['main-layout']}>
                        <div id="nav-box-div" className={style['main-nav']}>
                            <MainNav />
                        </div>   
                        <div id="title-box-div" className={style['main-title']}>  
                            <Switch>
                                    {
                                        routerConfig.map(i => { 
                                            return <Route key={i.pathUrl} 
                                            path={i.pathUrl} 
                                            component={i.component}
                                            />
                                        }
                                    )
                                }
                                <Route exact path="/" render={()=><Redirect to="/compareTechology" />} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                        <div className={style['main-content']}>
                                <ArticleContent/>
                        </div>
                    </div>
                </div>
            </Router>
 </Provider>
}

export default PCLayout;




