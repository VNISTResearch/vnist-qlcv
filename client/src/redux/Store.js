var redux = require('redux');

var accountInitialState = {
    email: 'huybv@gmail.com',
    password: 'huy123',
    statusLogin: false
};
const account = (state = accountInitialState, action) => {
    switch (action.type) {
        case "UPDATE_ACCOUNT":
            return {...state, statusLogin: !state.statusLogin}
        case "DELETE_ACOUNT":
            return {...state, statusLogin: !state.statusLogin}
        default:
            return state
    }
}

var store1 = redux.createStore(account);
store1.subscribe(() => {
    console.log(JSON.stringify(store1.getState()));
})

store1.dispatch({
    type: "UPDATE_ACCOUNT",
})

export default store1;