import {fromJS} from 'immutable';



const GET_ARTICLE_TITLE = "get_article_title";
const GET_WEB_TITLE = "get_web_title";

const $$initState = fromJS({
    webTitle:"",
    articleTitle:'',
    articleList:[]
})



export const getArticleTitle = (data) => {
    return {type:GET_ARTICLE_TITLE,articleTitle:data}
}

export const getWebTitle = (data) => ({type:GET_WEB_TITLE,webTitle:data})




export default (state=$$initState,action) => {
        switch (action.type) {
            case GET_ARTICLE_TITLE:
                return state.set("articleTitle",action.articleTitle);
            case GET_WEB_TITLE:
                return state.set("webTitle",action.webTitle)
            default:
                return state
        }
}




