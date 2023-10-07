import { createStore } from "/node_modules/redux/es/redux.mjs";

const initialState ={
    value : 0
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
                }    
           
    
        default:
            return prevState
    }

}

const store = createStore(appReducer)

// Update the display every time the state changes
const updateDisplay = () => {
    const state = store.getState();
    document.getElementById('value').innerText = state.value;
}

store.subscribe(updateDisplay);

// Call it once initially to set the initial value
updateDisplay();


document.getElementById('increment').onclick = () => {
    store.dispatch({
        type:"increment",
    })
}

document.getElementById('decrement').onclick = () => {
    store.dispatch({
        type:"decrement",
    })
}