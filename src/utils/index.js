export const cancelMaskerLayer = (flex,navWidth,mask) => {
            const nav = document.getElementById('main-nav-mobile');
            const navContent = document.getElementById('nav-mobile-content');
            const maskLayer = document.getElementById('mask-layer-box');
            setTimeout(() => {
                navContent.style.display = navWidth; 
                maskLayer.style.display = mask;
            }, 50);
            nav.style.flex = flex;
}

export const proxyEvent = (e,proxyElem,fn) => {//事件代理,根据元素类型代理相应的事件
        e.preventDefault();
        if(e.target.matches(proxyElem)){
                fn.call(e.target,e);
        }
}