export const cancelMaskerLayer = (flex,navWidth,mask) => {
            const nav = document.getElementById('main-nav-mobile');
            const navContent = document.getElementById('nav-mobile-content');
            const maskLayer = document.getElementById('mask-layer-box');
            nav.style.flex = flex;
            navContent.style.display = navWidth; 
            maskLayer.style.display = mask;
}