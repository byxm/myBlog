import React from 'react';
import {Loading} from 'generalComponents';
import Loadable from 'react-loadable';



const LoadingComponent = ({error}) => {
        if (error) {
            return <div>加载出错！</div>
        }else {
            return Loading();
        }
}

export const lazyLoad = (loaderComponents) => {
   return Loadable({
        loader:loaderComponents,
        loading:LoadingComponent
    })
}

const ArticleTitle = lazyLoad(()=>import("containers/articleTitle/pcDesk"));

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