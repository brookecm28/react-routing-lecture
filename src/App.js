import React from 'react'
import routes from './routes'
import Header from './components/Header'
import About from './components/About'
import AlbumList from './components/AlbumList'
import './App.css'
import SingleAlbum from './components/SingleAlbum'


function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      {/* <About />
      <AlbumList /> */}
    </div>
  )
}

export default App
