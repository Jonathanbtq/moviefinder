import { useEffect, useState } from "react";

export default function MenuButton({ updateMovie }){
    const [selectedCategory, setSelectedCategory] = useState('')

    const apiBaseUrl = 'https://api.themoviedb.org/3/movie';

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFjZWM2NWFmMDRmOWY0Njk5M2UxM2RjOWRlZDFiNiIsInN1YiI6IjY1OTk5ZGQ4ODliNTYxMDA5NDhiODJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oAD2ebs7sBFTF0wEGVVwUNd1uoN-nynXJJOqNnXFwYE'
        }
    };

    const fetchData = async (baseurl, state) => {
        fetch(baseurl, options)
            .then(response => response.json())
            .then(response => {
                updateMovie(response.results)
            })
            .catch(err => {
                console.error(err)
            })
    }
    
    const handleRandomMovie = () => {
        setSelectedCategory('random')
        fetch(`${apiBaseUrl}/popular?language=fr&page=1&region=fr`, options)
            .then(response => response.json())
            .then(response => {
                const randomId = handleRandom(response.results)
                if(randomId){
                    fetch(`${apiBaseUrl}/${randomId}?language=fr&page=1&region=fr`, options)
                        .then(response => response.json())
                        .then(response => {
                            if (response) {
                                updateMovie(response)
                            }
                        })
                }
            })
    }

    const handleRandom = (response) => {
        if (response.length === 0) {
            return null;
        }

        const newMovieId = []
        response.forEach(movie => {
            newMovieId.push(movie.id)
        });
        const random = Math.floor(Math.random()* newMovieId.length)
        const randomId = newMovieId[random];
        return randomId
    }

    const changeMovieButton = (state) => {
        switch (state) {
            case 'upcoming':
                setSelectedCategory('upcoming');
                fetchData(`${apiBaseUrl}/${state}?language=fr&page=1&region=fr`, state)
                break
            case 'top_rated':
                setSelectedCategory('top_rated');
                fetchData(`${apiBaseUrl}/${state}?language=fr&page=1&region=fr`, state)
                break
            case 'now_playing':
                setSelectedCategory('now_playing');
                fetchData(`${apiBaseUrl}/${state}?language=fr&page=1&region=fr`, state)
                break
            default:
                break
        }
    }
    
    return (
        <>
            <div className="button_div">
                <button
                    className={`${selectedCategory === 'top_rated' ? 'active_btn' : ''}`}
                    onClick={() => changeMovieButton('top_rated')}>
                    <p>Top Rated</p>
                </button>
                <button
                    className={`${selectedCategory === 'now_playing' ? 'active_btn' : ''}`}
                    onClick={() => changeMovieButton('now_playing')}>
                    <p>En diffusion</p>
                </button>
                <button
                    className={`${selectedCategory === 'upcoming' ? 'active_btn' : ''}`}
                    onClick={() => changeMovieButton('upcoming')}>
                    <p>A venir</p>
                </button>
                <button
                    className={`${selectedCategory === 'random' ? 'active_btn' : ''}`}
                    onClick={() => handleRandomMovie()}>
                    <p>Aléatoire</p>
                </button>
            </div>
        </>
    )
}