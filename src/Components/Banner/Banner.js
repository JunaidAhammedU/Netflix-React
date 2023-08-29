import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import { API_KEY,imageUrl } from '../../Constants/Constans';
import './Banner.css';
//-------------------------

const Banner = () => {
  const [Movie, setMovie] = useState();

  // Setup the axios call and fetching data fomr the server
  useEffect(()=>{
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
    setMovie(response.data.results[ Math.floor(Math.random() * 20)]);
   }).catch((err) => {
     console.log('no data revcived!');
   });
  },[]);

  return (
    <div className='banner' style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path:<h1>no banner</h1>})`}}>
        <div className='content'>
                <h1 className='title'>{Movie ? Movie.title: <h2>Netflix</h2>}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{Movie ? Movie.overview: ""}</h1>
        </div>
        <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner