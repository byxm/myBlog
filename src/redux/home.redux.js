import {fromJS} from 'immutable';



const GET_ARTICLE_TITLE = "get_article_title";
const GET_WEB_TITLE = "get_web_title";
const GET_CURRENT_INDEX = 'get_current_index';

const $$initState = fromJS({
    webTitle:"",
    articleTitle:'',
    articleList:[],
    currentIndex:0
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


export default (state=$$initState,action) => {
        switch (action.type) {
            case GET_ARTICLE_TITLE:
                return state.set("articleTitle",action.articleTitle);
            case GET_WEB_TITLE:
                return state.set("webTitle",action.webTitle);
            case GET_CURRENT_INDEX:
                return state.set("currentIndex",action.currentIndex)
            default:
                return state
        }
}




