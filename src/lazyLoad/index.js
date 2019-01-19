import React from 'react';
import Loadable from 'react-loadable';



const LoadingComponent = ({error}) => {
        if (error) {
            return <div>加载出错！</div>
        }else {
            return <div>加载成功.....</div>
        }
}

export const lazyLoad = (loaderComponents) => {
   return Loadable({
        loader:loaderComponents,
        loading:LoadingComponent
    })
}

const ArticleTitle = lazyLoad(()=>import("containers/articleTitle"))
const NotFound = lazyLoad(()=>import("components/NotFound"));


const routerConfig = [
    {
        pathUrl:'/myLife',
        component:ArticleTitle
    },
    {
        pathUrl:'/compareTechology',
        component:NotFound
    },
    {
        pathUrl:'/recommendBook',
        component:NotFound
    },
    {
        pathUrl:'/conclude',
        component:NotFound
    },
    {
        pathUrl:'/aboutMe',
        component:NotFound
    }
]


export default routerConfig;