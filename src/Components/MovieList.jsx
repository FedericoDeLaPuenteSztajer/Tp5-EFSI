import MovieCard from './MovieCard.jsx'

function MovieList(props) {
    let lista = <></>

    if (props.Results.length>0) {
        lista = (<ul>
            {(props.Results).map((result) => (
                <MovieCard poster={result.Poster} title={result.Title} year={result.Year} rated={result.Rated} />
            ))}
        </ul>)
        console.log("Test X1")
    } else {
        lista = <>No se encontraron películas</>
    }

    return lista;
}

export default MovieList
