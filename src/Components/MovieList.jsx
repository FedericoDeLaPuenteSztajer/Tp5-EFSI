import MovieCard from './MovieCard.jsx'

function MovieList(props) {
    let lista = <></>

    if (props.Results[0]) {
        lista = (<ul>
            {(props.Results).forEach = (result) => {
                <MovieCard poster={result.Poster} title={result.Title} year={result.Year} rate={result.Rated} />
            }}
        </ul>)
    } else {
        lista = <>No se encontraron películas</>
    }

    return lista;
}

export default MovieList
