import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import PCLayout from './pcLayout';
import MobileLayout from './mobileLayout'


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer,composeEnhancers(
//         applyMiddleware(thunk)
// ))

// const NotFound = lazyLoad(()=>import("components/NotFound"));



ReactDOM.render(

        <div>
            <MediaQuery query="(min-device-width:1224px)">
                    <PCLayout />
            </MediaQuery>
            <MediaQuery query="(max-device-width:1224px)">
                    <MobileLayout />
            </MediaQuery>
        </div>,


    // <Provider store={store}>
    //     <BrowserRouter>
    //         <div className={style['main-content-box']}>
    //             <div className={style['main-layout']}>
    //                 <div className={style['main-nav']}>
    //                     <MainNav />
    //                 </div>   
    //                 <div className={style['main-title']}>  
    //                     <Switch>
    //                             {
    //                                 routerConfig.map(i => { 
    //                                     return <Route key={i.pathUrl} 
    //                                     path={i.pathUrl} 
    //                                     component={i.component}
    //                                     />
    //                                 }
    //                             )
    //                         }
    //                         <Route exact path="/" render={()=><Redirect to="/compareTechology" />} />
    //                         <Route component={NotFound} />
    //                     </Switch>
    //                 </div>
    //                 <div className={style['main-content']}>
    //                         <ArticleTitle/>
    //                 </div>
    //             </div>
    //         </div>
    //     </BrowserRouter>
    //  </Provider>,
    document.getElementById('root')
)




