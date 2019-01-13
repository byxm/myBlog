import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch,HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import reducer from '../redux';
import LayOut from '../layOut'
import Test from '../test'
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
        applyMiddleware(thunk)
))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                    <Route path="/test" component={Test}  />
                    <Route path="/" component={LayOut}  />
            </Switch>
        </BrowserRouter>
     </Provider>,
    document.getElementById('root')
)




