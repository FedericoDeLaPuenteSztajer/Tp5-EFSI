//

function MovieCard(props){
    let card = <></>

    if (props.Movie) {
        card = (<li><img src={props.poster}/> {props.title} - Year: {props.year} - Rate: {props.rated}</li>)
    }else{
        card= <>Clikea una película</>
    }

    return card;
}

export default MovieCard
