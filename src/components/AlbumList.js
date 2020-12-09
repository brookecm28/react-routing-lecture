import React, { useState, useEffect } from 'react'
import Album from './Album'
import axios from 'axios'
import './style.css'

const AlbumList = (props) => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios.get('/api/albums').then((res) => {
      setAlbums(res.data)
    })
  }, [])

  return (
    <div className="album-list">
      <h2 className="album-list-title">All Albums</h2>
      <div className="list-hold">
        {albums.map((album) => (
          <Album key={album.id} data={album} />
        ))}
      </div>
    </div>
  )
}
export default AlbumList
