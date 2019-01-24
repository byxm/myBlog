import React from 'react';
import MyPhoto from './myPhoto';
import NavItems from './navItems';
import ConcactMe from './concactMe'


class MainNav extends React.Component{

    componentDidMount() {
        
    }
   

    render(){
        return (
            <>
                <MyPhoto />
                <NavItems />
                <ConcactMe />
            </>
        )
    }
}

export default MainNav