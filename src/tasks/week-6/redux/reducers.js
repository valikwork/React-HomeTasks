import { combineReducers } from 'redux';
import { FETCH_GISTS_REQUEST, FETCH_GISTS_SUCCESS, FETCH_GISTS_ERROR, SELECT_GIST, FETCH_SELECTED_GIST_REQUEST, FETCH_SELECTED_GIST_SUCCESS, FETCH_SELECTED_GIST_ERROR } from './actions';


function selectedGistReducer(state = '', action) {
    switch(action.type) {
        case SELECT_GIST:
            return action.payload;
        default: 
            return state;    
    }
}

function gistsReducer(state = {
    isLoading: false,
    items: [],
    error: ''
}, action) {
    switch(action.type) {
        case FETCH_GISTS_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            }
        case FETCH_GISTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload
            }
        case FETCH_GISTS_ERROR:   
            return {
                isLoading: false,
                items: [],
                error: action.payload
            }
        default: return state;   
    }
}

function selectedGistsContentReducer(state = {
    isLoading: false,
    gist: '',
    error: ''
}, action) {
    switch(action.type) {
        case FETCH_SELECTED_GIST_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            }
        case FETCH_SELECTED_GIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                gist: action.payload
            }
        case FETCH_SELECTED_GIST_ERROR:   
            return {
                isLoading: false,
                gist: '',
                error: action.payload
            }
        default: return state;   
    }
}

const rootReducer = combineReducers({
    selectedGist: selectedGistReducer,
    gists: gistsReducer,
    selectedGistContent: selectedGistsContentReducer
})

export default rootReducer;