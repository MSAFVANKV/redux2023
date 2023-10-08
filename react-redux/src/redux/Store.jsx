import { createStore } from "redux"

const initialState ={
    value : 0,
    showLebal:false,
}

function appReducer(prevState = initialState, action) {

    switch (action.type) {
        case 'increment':
            
                return {
                    ...prevState,
                    value: prevState.value+1
                }
                case 'decrement':
            
                return {
                    ...prevState,
                    value: prevState.value-1
                };
                case 'show-lebal':
            
                return {
                    ...prevState,
                    showLebal: action.payload
                }    
    
        default:
            return prevState
    }

}

const store = createStore(appReducer)

export default store