import { useState, useEffect } from 'react'
import api from './modules/api.jsx'

import SearchBar from './Components/SearchBar.jsx'
import MovieList from './Components/MovieList.jsx'
import MovieDetail from './Components/MovieDetail.jsx'

import Loader from './Components/Loader.jsx'


function App() {
  let application = <></>

  const [actualMovie, setMovie] = useState(undefined)
  const [loading, setLoading] = useState(false)

  const CargarMovie = (name) => {
    setLoading(true)

    const newName = (name.split(" ")).map(l => l + "+")

    api.get("&t=" + newName)
      .then((response) => {
        setMovie((response.data))
        setLoading(false)
      })
      .catch((error) => {
        alert("Error al buscar pelicula")
      })
  }

  if (loading) {
    application = (
      <>
        <header>
          <SearchBar CargarMovie={CargarMovie} /> {/*Incompleto*/}
        </header>
        <main>

          <div class="List">
            <MovieList /> {/*Incompleto*/}
          </div>

          <div class="Detail">
            <Loader />
          </div>
        </main>
      </>
    )
  } else {
    application = (
      <>
        <header>
          <SearchBar CargarMovie={CargarMovie} /> {/*Incompleto*/}
        </header>
        <main>

          <div class="List">
            <MovieList /> {/*Incompleto*/}
          </div>

          <div class="Detail">
            <MovieDetail /> {/*Incompleto*/}
          </div>
        </main>
      </>
    )
  }

  return application
}

export default App
