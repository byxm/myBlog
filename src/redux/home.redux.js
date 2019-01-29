import {fromJS} from 'immutable';



const GET_ARTICLE_TITLE = "get_article_title";
const GET_WEB_TITLE = "get_web_title";
const GET_CURRENT_INDEX = 'get_current_index';
const GET_PATH_URL = 'get_path_url';

const $$initState = fromJS({
    webTitle:"",
    articleTitle:'',
    articleList:[],
    currentIndex:"",
    pathUrl:""
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

export default (state=$$initState,action) => {
        switch (action.type) {
            case GET_ARTICLE_TITLE:
                return state.set("articleTitle",action.articleTitle);
            case GET_WEB_TITLE:
                return state.set("webTitle",action.webTitle);
            case GET_CURRENT_INDEX:
                return state.set("currentIndex",action.currentIndex);
            case GET_PATH_URL:
                return state.set("pathUrl",action.pathUrl).set("articleTitle","关于我")
            default:
                return state
        }
}




