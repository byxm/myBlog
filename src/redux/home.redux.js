import {fromJS} from 'immutable';



const GET_ARTICLE_TITLE = "get_article_title";

const $$initState = fromJS({
    articleTitle:'',
    articleList:[]
})



export const getArticleTitle = (data) => {
    return {type:GET_ARTICLE_TITLE,articleTitle:data}
}





export default (state=$$initState,action) => {
        switch (action.type) {
            case GET_ARTICLE_TITLE:
                return state.set("articleTitle",action.articleTitle)
            default:
                return state
        }
}




