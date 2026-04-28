import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar.jsx'
import MovieList from './Components/MovieList.jsx'
import MovieDetail from './Components/MovieDetail.jsx'

function App() {
  //

  return (
    <>
      <header>
        <SearchBar/>
      </header>
      <main>
        <div class="List">
          <MovieList/>
        </div>
        <div class="Card">
          <MovieDetail/>
        </div>
      </main>
    </>
  )
}

export default App
