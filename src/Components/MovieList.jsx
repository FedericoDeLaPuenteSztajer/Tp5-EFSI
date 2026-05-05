import MovieCard from './MovieCard.jsx'

function MovieList(props) {
    let lista = <></>

    if (props.Results.length > 0) {
        lista = (<ul>
            {(props.Results).map((result) => (
                <MovieCard key={result.imdbID} movie={result} GetAllMovieData={props.GetAllMovieData} />
            ))}
        </ul>)
    } else {
        lista = <>No se encontraron películas</>
    }

    return lista;
}

export default MovieList
