import {all, call, put, takeLatest} from "redux-saga/effects";
import {moviesSlice, oneMovieSlice, similarMoviesSlice} from "./app/slices";

async function httpClient(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}
async function httpClientOneMovie(url) {
    const response = await fetch(url);
    return await response.json();
}

// worker Saga
 function* fetchMovies({value}) {
    let movies
     if(!value){
        movies = yield call(
            httpClient,
            `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
        );
    } else {
        movies = yield call(
            httpClient,
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${value}`
        );
    }
    yield put(moviesSlice.actions.add({ movies }));
}
 function* fetchOneMovie({id}) {
    let movie = yield call(
        httpClientOneMovie,
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    yield put(oneMovieSlice.actions.add({ movie }));
}
function* fetchSimilarMovies({id}) {
    let similar = yield call(
        httpClient,
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`
    );
    yield put(similarMoviesSlice.actions.add({ similar }));
}

// watcher Saga
 function* watchMovies() {
    yield takeLatest("FETCH_MOVIES", fetchMovies);
}
 function* watchOneMovie() {
    yield takeLatest("FETCH_ONE_MOVIE", fetchOneMovie);
}
function* watchSimilarMovies() {
    yield takeLatest("FETCH_SIMILAR_MOVIES", fetchSimilarMovies);
}

// root Saga
export function* rootSaga() {
    yield all([
        watchOneMovie(),
        watchMovies(),
        watchSimilarMovies()
    ])

}