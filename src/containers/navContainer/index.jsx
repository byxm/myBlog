import React from 'react';
import {MyPhoto,NavItems,ConcactMe} from 'components/mainNav';


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