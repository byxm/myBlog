const ADD_AGE = 'add_age';
const SUBSTRAC_AGE = 'substrac_age';
const TIME_OUT_STRING = 'time_out_string';


const initState = {
    name:'Simone',
    age:22,
    sex:'男'
}

export default (state=initState,action) => {
        switch(action.type){
            case ADD_AGE:
                return {...state,age:state.age+1}
            
            default:
                return state;
        }
}

export const addAge = () => ({type:ADD_AGE})