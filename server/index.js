const express = require('express')
const app = express()
const albums = require('./data.json')
const SERVER_PORT = 5000
app.use(express.json())

app.get('/api/albums', (req, res) => res.status(200).send(albums))

app.get('/api/albums/:album_id', (req, res) => {
  const album = albums.find((e) => e.id === +req.params.album_id)

  if (album) {
    res.status(200).send(album)
  } else {
    res.status(404).send('Album not found')
  }
})

app.listen(SERVER_PORT, () => console.log(`Rocking out on port ${SERVER_PORT}`))
