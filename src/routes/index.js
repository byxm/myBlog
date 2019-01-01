import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Link } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import reducer from '../redux';
import thunk from 'redux-thunk';
import Children from 'containers/children'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
        applyMiddleware(thunk)
))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Children}  />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)




