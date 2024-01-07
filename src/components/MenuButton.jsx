export default function MenuButton({ updateMovie }){

    const apiBaseUrl = 'https://api.themoviedb.org/3/movie';

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFjZWM2NWFmMDRmOWY0Njk5M2UxM2RjOWRlZDFiNiIsInN1YiI6IjY1OTk5ZGQ4ODliNTYxMDA5NDhiODJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oAD2ebs7sBFTF0wEGVVwUNd1uoN-nynXJJOqNnXFwYE'
        }
    };

    // const fetchData = (endpoint) => {
    //     return fetch(`${apiBaseUrl}/${endpoint}`, options)
    //         .then(response => response.json())
    //         .catch(error => {
    //             console.error(error);
    //             throw error;
    //         });
    // }

    // const getRandomMovieId = (response) => {
    //     if (response.length === 0) {
    //         return null
    //     }

    //     const newMovieIds = response.map(movie => movie.id)
    //     const randomIndex = Math.floor(Math.random() * newMovieIds.length)
    //     return newMovieIds[randomIndex]
    // }

    // const changeMovieButton = (state) => {
    //     switch (state) {
    //         case 'toprated':
    //         case 'endiffusion':
    //         case 'avenir':
    //         case 'hasard':
    //             fetchData(`${state}?language=fr&page=1&region=fr`);
    //             break;
    //         default:
    //             break;
    //     }
    // };

    // const handleRandomMovie = () => {
    //     fetchData('popular?language=fr&page=1&region=fr')
    //         .then(response => {
    //             console.log(response);
    //             const randomMovieId = getRandomMovieId(response);
    
    //             if (randomMovieId) {
    //                 return fetchData(`${randomMovieId}?language=fr`);
    //             }
    //         })
    //         .then(data => {
    //             if (data) {
    //                 updateMovie(data);
    //             }
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    // };

    const changeMovieButton = (state) => {

        const randomMovie = (response) => {
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

        
        if (state === 'upcoming') {    
              fetch(`${apiBaseUrl}/upcoming?language=fr&page=1&region=fr`, options)
                .then(response => response.json())
                .then(response => {
                    updateMovie(response.results)
                })
                .catch(err => console.error(err));
        } else if (state === 'top_rated') {
            fetch(`${apiBaseUrl}/top_rated?language=fr&page=1&region=fr`, options)
                .then(response => response.json())
                .then(response => {
                    updateMovie(response.results)
                })
                .catch(err => console.error(err));
        } else if (state === 'now_playing') {
              fetch(`${apiBaseUrl}/now_playing??language=fr&page=1&region=fr`, options)
                .then(response => response.json())
                .then(response => {
                    updateMovie(response.results)
                })
                .catch(err => console.error(err));
        } else if (state === 'hasard') {
            fetch(`${apiBaseUrl}/popular?language=fr&page=1&region=fr`, options)
                .then(response => response.json())
                .then(response => {
                    let randomData = randomMovie(response.results)
                    fetch(`https://api.themoviedb.org/3/movie/${randomData}?language=en-US`, options)
                        .then(response => response.json())
                        .then(response => {
                            updateMovie(response)
                        })
                        .catch(err => console.error(err));
                })
                .catch(err => console.error(err));
        }
    }
    return (
        <>
            <div className="button_div">
                <button onClick={() => changeMovieButton('top_rated')}>
                    <p>Top Rated</p>
                </button>
                <button onClick={() => changeMovieButton('now_playing')}>
                    <p>En diffusion</p>
                </button>
                <button onClick={() => changeMovieButton('upcoming')}>
                    <p>A venir</p>
                </button>
                <button onClick={() => changeMovieButton('hasard')}>
                    <p>Aléatoire</p>
                </button>
            </div>
        </>
    )
}