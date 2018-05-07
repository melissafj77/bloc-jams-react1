import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component{
  constructor(props){
    super(props);
    const album =album.Data.find(album =>{
      return album.slug === this.props.match.params.slub
    });

    this.state ={
      album:album
    };
  }
    render() {
        return (
          <section className="album">
            <section id="album-info">
              <img id="album-cover-art" />
              <div className="album-details">
                <h1 id="album-title">{this.state.album.title}</h1>
                <h2 className="artist">{this.state.album.artist}</h2>
                <div id="release-info">{this.state.album.releaseInfo}</div>
              </div>
            </section>
            <table id="song list">
              <colgroup>
                <col id="song-number-column"/>
                <col id="song-title"/>
                <col id="col-duration-column"/>
              </colgroup>
              <tbody>
              </tbody>
            </table>
          </section>
        );
      }
    }
   
      
export default Album;