var redux = require('redux');

var accountInitialState = {
    email: '',
    password: '',
    statusLogin: false
};
const account = (state = accountInitialState, action) => {
    switch (action.type) {
        case "UPDATE_ACCOUNT":
            return state
        case "DELETE_ACOUNT":
            return state
        default:
            return state
    }
}

var store = redux.createStore(account);
store.subscribe(() => {
    console.log(JSON.stringify(store.getSate()))
})

export default store;