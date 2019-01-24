import React from 'react';
import MyPhoto from './myPhoto';
import NavItems from './navItems';
import ConcactMe from './concactMe'


class MainNav extends React.Component{

    componentDidMount() {
        
    }
   

    render(){
        return (
            <div id="nav-mobile-content" className="nav-content-box">
                <MyPhoto />
                <NavItems />
                <ConcactMe />
            </div>
        )
    }
}

export default MainNav