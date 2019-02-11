import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import PCLayout from './pcLayout';
import MobileLayout from './mobileLayout';



ReactDOM.render(
        <div>
            <MediaQuery query="(min-device-width:1224px)">
                    <PCLayout />
            </MediaQuery>
            <MediaQuery query="(max-device-width:1224px)">
                    <MobileLayout />
            </MediaQuery>
        </div>,
    document.getElementById('root')
)




