//

function MovieList(props) {
    //

    return (
        <ul>
            {(props.Results).forEach = (result) => {
                <li>{result.Title} - Year: {result.Year} - Rate: {result.Rated}</li>
            }}
        </ul>
    )
}

export default MovieList
