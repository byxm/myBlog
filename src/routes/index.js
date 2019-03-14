import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import PCLayout from './pcLayout';
import MobileLayout from './mobileLayout';


const render = (Pc,Mobile) => {
        ReactDOM.render(
                <div>
                <MediaQuery query="(min-device-width:1224px)">
                                <Pc />
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                                <Mobile />
                </MediaQuery>
            </div>,
        document.getElementById('root')
        )
}

render(PCLayout,MobileLayout);

if (module.hot) {
        module.hot.accept('./pcLayout',()=>{
                render(PCLayout,MobileLayout);
        })
        module.hot.accept('./mobileLayout',()=>{
                render(PCLayout,MobileLayout);
        })
}

