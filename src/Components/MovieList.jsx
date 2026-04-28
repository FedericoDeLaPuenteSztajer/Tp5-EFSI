import MovieCard from './MovieCard.jsx'

function MovieList(props) {
    //

    return (
        <ul>
            {(props.Results).forEach = (result) => {
                <MovieCard poster={result.Poster} title={result.Title} year={result.Year} rate={result.Rated}/>
            }}
        </ul>
    )
}

export default MovieList
