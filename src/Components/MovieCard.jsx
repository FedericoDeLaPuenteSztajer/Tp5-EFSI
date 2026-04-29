//

function MovieCard(props) {
        console.log("X2")
    return (
        <li><img src={props.poster} /> {props.title} - Year: {props.year} - Rate: {props.rated}</li>);
}

export default MovieCard
