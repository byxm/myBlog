import {fromJS} from 'immutable';



const GET_ARTICLE_TITLE = "get_article_title";
const GET_WEB_TITLE = "get_web_title";
const GET_CURRENT_INDEX = 'get_current_index';
const GET_PATH_URL = 'get_path_url';
const GET_ARTICLE_CONTENT = 'get_article_content';
const GET_LOADINGPIC_INFO = 'get_loading_info';

const $$initState = fromJS({
    webTitle:"",
    articleTitle:'',
    articleList:[],
    articleContent:'',
    currentIndex:"",
    pathUrl:"",
    isLoading:false
})



export const getArticleTitle = (data) => {
    return {type:GET_ARTICLE_TITLE,articleTitle:data}
}

export const getWebTitle = (data) => {
    return {type:GET_WEB_TITLE,webTitle:data}
}

export const getCurrentIndex = (data) => {
    return {type:GET_CURRENT_INDEX,currentIndex:data}
}

export const getPathUrl = (pathUrl) => {
    return {type:GET_PATH_URL,pathUrl}
}

export const getArticleContent = (articleContent) => ({type:GET_ARTICLE_CONTENT,articleContent})

export const getLoadingInfo = (isLoading) => ({type:GET_LOADINGPIC_INFO,isLoading})

export default (state=$$initState,action) => {
        switch (action.type) {
            case GET_ARTICLE_TITLE:
                return state.set("articleTitle",action.articleTitle);
            case GET_WEB_TITLE:
                return state.set("webTitle",action.webTitle);
            case GET_CURRENT_INDEX:
                return state.set("currentIndex",action.currentIndex);
            case GET_PATH_URL:
                return state.set("pathUrl",action.pathUrl).set("articleTitle","关于我");
            case GET_ARTICLE_CONTENT:
                return state.set('articleContent',action.articleContent)
            case GET_LOADINGPIC_INFO:
                return state.set('isLoading',action.isLoading);
            default:
                return state
        }
}




