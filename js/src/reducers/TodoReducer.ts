import {
    ADD_TODO,
    COMPLETE_TODO,
    REMOVE_TODO,
    FETCH_PENDING,
    FETCH_FAIL,
    FETCH_SUCCESS,
    SAVE_PENDING,
    SAVE_FAIL,
    SAVE_SUCCESS,
    CLEAR_STORE
} from '../constants';
import ITodoModel from '../models/ITodoModel';
import { IAction } from '../actions/IAction';

export interface ITodoState {
    todos: ITodoModel[];
    fetchStatus: string | null;
    persistStatus: string | null;
}

const InitialState: ITodoState = {
    todos: [],
    fetchStatus: null,
    persistStatus: null
};

const TodoReducer = (state: ITodoState = InitialState, action: IAction): ITodoState => {
    if (!action) {
        return state;
    }

    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload.todo 
                ]
            };
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => (todo.id === action.payload.id) 
                    ? {...todo, done: !todo.done}
                    : todo)
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id != action.payload.id)
            };
        case FETCH_PENDING:
            return {
                ...state,
                fetchStatus: FETCH_PENDING
            };
        case FETCH_FAIL:
            return {
                ...state,
                fetchStatus: FETCH_FAIL
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                fetchStatus: FETCH_SUCCESS,
                todos: action.payload.data
            }
        case SAVE_PENDING:
            return {
                ...state,
                persistStatus: SAVE_PENDING
            };
        case SAVE_FAIL:
            return {
                ...state,
                persistStatus: SAVE_FAIL
            };
        case SAVE_SUCCESS:
            return {
                ...state,
                persistStatus: SAVE_SUCCESS
            };
        case CLEAR_STORE:
            return InitialState;
        default:
            return state;
    }
};

export default TodoReducer;
