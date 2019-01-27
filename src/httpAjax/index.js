import axios from 'axios';
import NProgress from 'nprogress';
import {Message} from 'generalComponents'

//添加请求拦截器
axios.interceptors.request.use((config) => {
        NProgress.start();
        if (config.url) {
            return config;
        }
},(error) => {
    return Promise.reject(error);
})

axios.interceptors.response.use((response) => {
    NProgress.done();
    return response;
},(error) => {
    return Promise.reject(error);
})


class httpAjax{
    static ajax(url,params){
        const baseUrl = "https://www.easy-mock.com/mock/5c3ef28a59a16703c685443b/blogInfo";
        return new Promise((resolve,reject) => {
            axios({
                method:'get',
                baseURL:baseUrl,
                url,
                params,
                timeout:5000
            }).then((res) => {
                    if (res.status === 200) {
                        resolve(res.data)    
                    }else {
                        Message.error({
                            title:"错误信息",
                            content:'请求失败，请重新刷新!'
                        })
                        reject(res.data)
                    }
                }).catch(err => {
                    Message.error({
                        title:'错误信息',
                        content:'easy-mock服务器可能崩溃了，请刷新页面或稍后访问'
                    })
                    console.error(err)
                })
        })

    }
}

export default httpAjax