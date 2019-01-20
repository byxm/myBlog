import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import reducer from '../redux';
import routerConfig,{lazyLoad} from '../lazyLoad'
import style from './style.scss';
import './reset.scss';
import thunk from 'redux-thunk';

import MainNav from 'containers/navContainer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
        applyMiddleware(thunk)
))

const NotFound = lazyLoad(()=>import("components/NotFound"));



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className={style['main-content-box']}>
                <div className={style['main-layout']}>
                    <div className={style['main-nav']}>
                        <MainNav />
                    </div>   
                    <div className={style['main-title']}>  
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
                                <Route exac path="/" render={()=><Redirect to="/myLife" />} />
                                <Route component={NotFound} />
                            </Switch>
                    </div>
                    <div className={style['main-content']}>
                    
                    </div>
                </div>
            </div>
        </BrowserRouter>
     </Provider>,
    document.getElementById('root')
)




