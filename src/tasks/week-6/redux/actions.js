import axios from 'axios';

export const FETCH_GISTS_REQUEST = 'FETCH_GISTS_REQUEST';
export const FETCH_GISTS_SUCCESS = 'FETCH_GISTS_SUCCESS';
export const FETCH_GISTS_ERROR = 'FETCH_GISTS_ERROR';

export const FETCH_SELECTED_GIST_REQUEST = 'FETCH_SELECTED_GIST_REQUEST';
export const FETCH_SELECTED_GIST_SUCCESS = 'FETCH_SELECTED_GIST_SUCCESS';
export const FETCH_SELECTED_GIST_ERROR = 'FETCH_SELECTED_GIST_ERROR';

export const SELECT_GIST = 'SELECT_GIST'


export function selectGist(gist) {
    return {
        type: SELECT_GIST,
        payload: gist
    }
}

const fetchGistsRequests = () => ({
    type: FETCH_GISTS_REQUEST
});

const fetchGistsSuccess = response => ({
    type: FETCH_GISTS_SUCCESS,
    payload: response.data
});

const fetchGistsError = error => ({
    type: FETCH_GISTS_ERROR,
    payload: error.message
});

export function fetchAllGists(){
    return dispatch => {
        dispatch(fetchGistsRequests())
        axios.get('https://api.github.com/gists/public')
            .then(res => dispatch(fetchGistsSuccess(res)))
            .catch(err => dispatch(fetchGistsError(err)))
    }
}

const fetchSelectedGistRequests = () => ({
    type: FETCH_SELECTED_GIST_REQUEST
});

const fetchSelectedGistSuccess = response => ({
    type: FETCH_SELECTED_GIST_SUCCESS,
    payload: response.data
});

const fetchSelectedGistError = error => ({
    type: FETCH_SELECTED_GIST_ERROR,
    payload: error.message
});

export function fetchSelectedGist(url){
    return dispatch => {
        dispatch(fetchSelectedGistRequests())
        axios.get(url)
            .then(res => dispatch(fetchSelectedGistSuccess(res)))
            .catch(err => dispatch(fetchSelectedGistError(err)))
    }
}

