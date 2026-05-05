//

function MovieCard(props) {
    const movie= props.movie;

    return (
        <li onClick={() => props.GetAllMovieData(movie.Title)}><img src={movie.Poster} /> {movie.Title} - Year: {movie.Year}</li>
    );
}

export default MovieCard
