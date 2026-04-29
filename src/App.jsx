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

  const SearchMovie = (name) => {
    setLoading(true)

    api.get(API_KEY + "&t=" + name.replaceAll(" ", "+"))
      .then((response) => {
        setMoviesList((response.data.Search))
        setLoading(false)
      })
      .catch((error) => {
        alert("Error al buscar pelicula")
      })
  }

  const CargarMovie = () => {

  }

  if (loading) {
    application = (
      <>
        <header>
          <SearchBar SearchMovie={SearchMovie} />
        </header>
        <main>

          <div className="List">
            <Loader />
          </div>

          <div className="Detail">
            <MovieDetail Movie={actualMovie} />
          </div>
        </main>
      </>
    )
  } else {
    application = (
      <>
        <header>
          <SearchBar SearchMovie={SearchMovie} />
        </header>
        <main>

          <div className="List">
            <MovieList Results={[moviesList]} />
          </div>

          <div className="Detail">
            <MovieDetail Movie={actualMovie} />
          </div>
        </main>
      </>
    )
  }

  return application
}

export default App
