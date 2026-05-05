//

function MovieDetail(props) {

    let detailsBox = <></>
    const Movie = props.Movie

    if (props.Movie) {
        detailsBox = (<ul>
            <li>Título completo: {Movie.Title}</li>
            <img src={Movie.Poster} alt="Póster de la película" />
            <li>Año: {Movie.Year}</li>
            <li>Género: {Movie.Genre}</li>
            <li>Director: {Movie.Director}</li>
            <li>Actores principales: {Movie.Actors}</li>
            <li>Sinopsis: {Movie.Plot}</li>
            <li>Duración: {Movie.Runtime}</li>
            <li>Idioma: {Movie.Language}</li>
            <li>País: {Movie.Country}</li>
            <li>Puntaje IMDb: {Movie.imdbRating}</li>
        </ul>)
    } else {
        detailsBox = <>Clikea una película</>
    }

    return detailsBox;
}

export default MovieDetail
