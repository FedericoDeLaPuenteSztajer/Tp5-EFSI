//

function MovieCard(props) {
    const movie= props.movie;

    return (
        <li onClick={props.setMovie()}><img src={movie.Poster} /> {props.Title} - Year: {props.Year} - Rate: {props.Rated}</li>
    );
}

export default MovieCard
