import React from 'react';
import MyPhoto from './myPhoto';
import NavItems from './navItems';
import ConcactMe from './concactMe'


class MainNav extends React.Component{

    componentDidMount() {
        
    }
   

    render(){
        return (
            <article id="nav-content-box">
                <MyPhoto />
                <NavItems />
                <ConcactMe />
            </article>
        )
    }
}

export default MainNav