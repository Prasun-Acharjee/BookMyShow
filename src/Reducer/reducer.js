const initialState={
    movies:[],
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ON_CLICK':
            return{
                ...state,movies:action.payload
            }
        default:
            return state;
    }
}