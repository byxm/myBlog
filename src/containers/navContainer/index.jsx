import React from 'react';
import {MyPhoto,NavItems} from 'components/mainNav';


class MainNav extends React.Component{

    componentDidMount() {
        
    }
    

    render(){
        return (
            <>
                <MyPhoto />
                <NavItems />
            </>
        )
    }
}

export default MainNav