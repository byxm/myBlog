import React from 'react';
import {createPortal} from 'react-dom';
import ReactDOM from 'react-dom';
import style from './style.scss';

 const customDiv = document.createElement('div');
       customDiv.setAttribute('id',"customDivBox");
class Message {
    constructor(){
      this.boxRef = React.createRef();
      this.messageRef = React.createRef();
    }

    messageBox(messageProps,type,color){
        const typeIcon = {success:"&#xe644;",error:"&#xe607;",warning:"&#xe620;"}
        return (
                createPortal(
                    <div id="messageBox" ref={this.boxRef} className={style['message-box']}>
                        <div id="messageRef" ref={this.messageRef} className={style['message-alert']}>
                            <p>
                                <span style={{color,fontSize:'1.8em'}} className="iconfont" 
                                dangerouslySetInnerHTML={{__html:typeIcon[type]}}></span>
                                <span className={style['message-title']}>{messageProps.title}</span>
                            </p>
                            <p className={style['message-content']}>{messageProps.content}</p>
                            <div className={style['message-btn-div']}>
                                <button type="button" className={style['message-button-cancel']}>取消</button>
                                <button onClick={()=>{handleCloseMess(this.messageRef,this.boxRef,messageProps.onOk)}} 
                                type="button" className={style['message-button-confirm']}>知道了</button>
                            </div>
                        </div> 
                    </div>,
                    document.body.appendChild(customDiv)
                )
        )
        
    }

}

function handleCloseMess(elemMes,eleBox,callBackOk){
        elemMes.current.style.transform = "scale(0)";
        setTimeout(() => {
             eleBox.current.style.display = "none";
             const dom = document.getElementById('customDivBox');
             document.body.removeChild(dom);
             callBackOk && callBackOk();
        }, 250);
}

const ms = new Message();

const initMessageInfo = (messageProps,type,color) => {
        document.body.appendChild(customDiv);
        const VutueDOM = ms.messageBox(messageProps,type,color);
        ReactDOM.render(VutueDOM,document.getElementById('customDivBox'));
        document.getElementById('messageBox').style.display = 'block';
        setTimeout(() => {
            document.getElementById('messageRef').style.transform = 'scale(1)';
        }, 100);
}


ms.__proto__.success = function(messageProps){
        initMessageInfo(messageProps,'success','#19ef07');
}
ms.__proto__.error = function(messageProps){
        initMessageInfo(messageProps,'error','#f03707');
}
ms.__proto__.warning = function(messageProps){
        initMessageInfo(messageProps,'warning','#f4f404');
}

export default ms;