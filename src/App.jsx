import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import MovieList from './Components/MovieList'
import MovieCard from './Components/MovieCard'

function App() {
  //

  return (
    <>
      <header>
        <SearchBar></SearchBar>
      </header>
      <main>
        <div class="List">
          <MovieList></MovieList>
        </div>
        <div class="Card">
          <MovieCard></MovieCard>
        </div>
      </main>
    </>
  )
}

export default App
