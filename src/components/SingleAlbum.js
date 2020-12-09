import React, { Component } from 'react'
import './style.css'
import axios from 'axios'

class SingleAlbum extends Component {
  constructor() {
    super()
    this.state = {
      album: {},
    }
  }



  componentDidMount() {
    //Find album using match object
   this.getAlbum()
  }

  componentDidUpdate(prevProps) {
    //Check for change in match object and use it to find album
    const {album_id} = this.props.match.params
    if(prevProps.match.params.album_id !== album_id) {
      this.getAlbum()
    }
  }
  
  getAlbum = () => {
  const {album_id} = this.props.match.params
  axios.get(`/api/albums/${album_id}`).then((res) => {
    this.setState ({
      album: res.data
    })
  })
  .catch((err) => {
    this.props.history.push('/404')
  })
}
 
  handleBuyAlbum = () => {
    alert('YOU BOUGHT IT')
    //Return to home page
    this.props.history.push('/albums')
  }

  render() {
    return (
      <div className="single-album">
        <h2>
          {this.state.album.artist} - {this.state.album.title}
        </h2>
        <img
          src={this.state.album.image}
          alt={this.state.album.title}
          className="large-album-art"
        />
        <button onClick={() => this.handleBuyAlbum()} className="buy-button">
          Buy Now!
        </button>
      </div>
    )
  }
}
export default SingleAlbum
