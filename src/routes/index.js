import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import reducer from '../redux';
import LayOut from '../layOut'
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
        applyMiddleware(thunk)
))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={LayOut}  />
        </BrowserRouter>
     </Provider>,
    document.getElementById('root')
)




