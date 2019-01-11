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
                <div onClick={() => {this.handle}}></div>
            </>
        )
    }
}

export default MainNav