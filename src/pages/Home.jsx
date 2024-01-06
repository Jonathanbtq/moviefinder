import React, { useEffect, useState } from "react"
import SearshBar from "../components/SearshBar"
import MovieContent from "../components/MovieContent"

import '../assets/styles/moviecontent.css'

export default function Home(){
    const [movie, setMovie] = useState([])

    const UpdateMovieFind = (newMovie) => {
        setMovie(newMovie)
    }

    const fetchMovie = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFjZWM2NWFmMDRmOWY0Njk5M2UxM2RjOWRlZDFiNiIsInN1YiI6IjY1OTk5ZGQ4ODliNTYxMDA5NDhiODJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oAD2ebs7sBFTF0wEGVVwUNd1uoN-nynXJJOqNnXFwYE'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => {
                UpdateMovieFind(response.results)
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    return(
        <>
            <h1>Trouve ton film en quelques secondes</h1>
            <SearshBar updateMovie={UpdateMovieFind} />
            <MovieContent movie={movie} />
        </>
    )
}