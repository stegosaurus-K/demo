import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';  // 派发任务时，需要异步获取数据

const initialState = {
    items: []
}

function reducer(state = initialState, action) {
    state = { ...state };
    switch (action.type) {
        case 'GET_STATE':
            state.items = action.info;
            break;
        default:
    }
    return state;
}
export default createStore(reducer, applyMiddleware(reduxPromise));