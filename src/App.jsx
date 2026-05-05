import { useState, useEffect } from 'react'
import api from './modules/api.jsx'

import SearchBar from './Components/SearchBar.jsx'
import MovieList from './Components/MovieList.jsx'
import MovieDetail from './Components/MovieDetail.jsx'

import Loader from './Components/Loader.jsx'

function App() {
  let application = <></>
  const API_KEY = '?apikey=21273b29';

  const [moviesList, setMoviesList] = useState([])
  const [actualMovie, setMovie] = useState(undefined)
  const [loading, setLoading] = useState(true)

  const SearchMovies = (name) => {
    setLoading(true)

    api.get(API_KEY + "&s=" + name.replaceAll(" ", "+"))
      .then((response) => {
        setMoviesList((response.data.Search))
        setLoading(false)
      })
      .catch((error) => {
        alert("Error al buscar pelicula")
      })
  }

  const GetAllMovieData = async (title) => {
    api.get(API_KEY + "&t=" + title.replaceAll(" ", "+"))
      .then((response) => {
        setMovie((response.data))
      })
      .catch((error) => {
        alert("Error al buscar pelicula")
      })
  }

  return (
    <>
      <header>
        <SearchBar SearchMovies={SearchMovies} />
      </header>
      <main>

        <div className="List">
          {loading && <Loader />}
          {!loading && <MovieList Results={moviesList} GetAllMovieData={GetAllMovieData} />}
        </div>

        <div className="Detail">
          {actualMovie!=undefined && <MovieDetail Movie={actualMovie} />}
        </div>
      </main>
    </>
  )

}

export default App
