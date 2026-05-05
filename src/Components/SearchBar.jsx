//

function SearchBar(props) {
    const submit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        props.SearchMovies(data.get("name"));
    }

    return (
        <>
            <form onSubmit={submit}>
                Nombre o ID:<input name="name"></input>
                <button type="submit"></button>
            </form>
        </>
    )
}

export default SearchBar
