import React, {useEffect,useState} from 'react'
import './Poster.css';
import '../../axios'
import {baseURL,API_KEY, imageUrl } from '../../Constants/Constans';
import axios from 'axios';
import YouTube from 'react-youtube';
//-----------------------------------------------------------------

const Poster = (props) => {

  const [Movies, setMovies] = useState([])
  const [youtubeKey, setYoutubeKey] = useState('')

  useEffect(()=>{
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
  }).catch((err) => {
      console.log("poster fetching data problem!! from axios");
    });
  });

  const opts = {
    height: '350',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovieTrailer = (id)=>{
    axios.get(`${baseURL}/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      if (response.data.results.length !== 0) {
        setYoutubeKey(response.data.results[0])
        console.log(response.data.results[0])
      }else{
        console.log('Array length zero');
      }
    }).catch((err)=>{
      console.log("no data");
    })
  }
  return (
    <div>
        <div className="poster-div">
            <h2 style={{marginTop:"15px"}}>{props.title}</h2>
            <div className="posters" >
              {Movies.map((movie)=>{
                return(
                  <img onClick={()=>handleMovieTrailer(movie.id)} className={props.isOriginal?'poster':'smallPoster'} src={`${movie ? imageUrl+movie.backdrop_path : ""}`} alt="poster" />
                )
              })}
            </div>
            {youtubeKey && <YouTube videoId={youtubeKey.key} opts={opts}/>}
        </div>
    </div>
  )
}

export default Poster