import { useState, useEffect } from 'react'
import api from './modules/api.jsx'

import SearchBar from './Components/SearchBar.jsx'
import MovieList from './Components/MovieList.jsx'
import MovieDetail from './Components/MovieDetail.jsx'

function App() {
  
  

  return (
    <>
      <header>
        <SearchBar/>
      </header>
      <main>
        <div class="List">
          <MovieList/>
        </div>
        <div class="Detail">
          <MovieDetail/>
        </div>
      </main>
    </>
  )
}

export default App
