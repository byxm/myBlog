import axios from 'axios';
import NProgress from 'nprogress';

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
                        reject(res.data)
                    }
                }).catch(err => {
                    console.error(err)
                })
        })

    }
}

export default httpAjax