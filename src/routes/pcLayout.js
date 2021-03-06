import React from 'react';
import { BrowserRouter,Route,Switch,Redirect,HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import reducer from '../redux';
import routerConfig,{lazyLoad} from '../lazyLoad'
import style from './style.scss';
import './reset.css';
import '../../node_modules/nprogress/nprogress.css';
import thunk from 'redux-thunk';

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
                <article className={style['main-layout']}>
                    <section id="nav-box-div" className={style['main-nav']}>
                            <MainNav />
                    </section>   
                    <section id="title-box-div" className={style['main-title']}>  
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
                    </section>
                    <section className={style['main-content']}>
                            <ArticleContent/>
                    </section>
                </article>
            </Router>
 </Provider>
}

export default PCLayout;




