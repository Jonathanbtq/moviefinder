import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/movie/MovieDetail";

import '../assets/styles/movie.css'

export default function Movie(){
    const param = useParams();
    const [movie, setMovieId] = useState({})

    const apiBaseUrl = 'https://api.themoviedb.org/3/movie';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer your_access_token'
        }
    };

    const findMovieId = () => {
        fetch(`${apiBaseUrl}/${param.id}?language=fr&page=1&region=fr`, options)
            .then(response => response.json())
            .then(response => {
                if (response) {
                    console.log(response)
                    setMovieId(response);
                }
            })
            .catch(error => {
                console.error("Error fetching movie details:", error);
            });
    }

    useEffect(() => {
        findMovieId();
    }, []);
    
    return(
        <>
            <p>{param.id}</p>
            <MovieDetail movie={movie} />
        </>
    );
}