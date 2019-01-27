import React from 'react';
import Loadable from 'react-loadable';
import NProgress from 'nprogress';
import {Loading} from 'generalComponents';



const LoadingComponent = ({error}) => {
        if (error) {
            return <div>加载出错！</div>
        }else {
            return Loading()
        }
}



export const lazyLoad = (loaderComponents) => {
    NProgress.start();
   return Loadable({
        loader:loaderComponents,
        loading:LoadingComponent
   })
}

const ArticleTitle = lazyLoad(()=>import("containers/articleTitle/mobilePhone"));

const routerConfig = [
    {
        pathUrl:'/myLife',
        component:ArticleTitle
    },
    {
        pathUrl:'/compareTechology',
        component:ArticleTitle
    },
    {
        pathUrl:'/recommendBook',
        component:ArticleTitle
    },
    {
        pathUrl:'/conclude',
        component:ArticleTitle
    },
    {
        pathUrl:'/aboutMe',
        component:ArticleTitle
    }
]



export default routerConfig;