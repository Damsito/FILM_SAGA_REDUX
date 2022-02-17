import {all, call, put, takeLatest, takeEvery} from "redux-saga/effects";
import {moviesSlice, oneMovieSlice} from "./app/slices";

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
    console.log("aeddeaadez")
    let movies = []
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
    console.log(movie)
    yield put(oneMovieSlice.actions.add({ movie }));
}

// watcher Saga
 function* watchMovies() {
    yield takeLatest("FETCH_MOVIES", fetchMovies);
}
 function* watchOneMovie() {
    console.log('in watch movie')
    yield takeLatest("FETCH_ONE_MOVIE", fetchOneMovie);
}

// root Saga
export function* rootSaga() {
    yield all([
        watchOneMovie(),
        watchMovies()
    ])

}