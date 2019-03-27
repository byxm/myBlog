import React, {useState,useEffect} from 'react';


function Test(){
    const [isOnline,setIsOnline] = useState(null);
    function handleStatusChange(status){
        setIsOnline(status.isOnline);
    }
    useEffect(()=>{
        // ChatAPI.subscribeToFriendStauts()
    })
} 

export default Test;