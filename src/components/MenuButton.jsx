export default function MenuButton({ updateMovie }){

    const changeMovieButton = (state) => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFjZWM2NWFmMDRmOWY0Njk5M2UxM2RjOWRlZDFiNiIsInN1YiI6IjY1OTk5ZGQ4ODliNTYxMDA5NDhiODJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oAD2ebs7sBFTF0wEGVVwUNd1uoN-nynXJJOqNnXFwYE'
            }
        };

        const randomMovie = (response) => {
            if (response.length === 0) {
                return null;
            }
            const random = Math.floor(Math.random(response)* response.length)
            return random
        }

        
        if (state === 'avenir') {    
              fetch('https://api.themoviedb.org/3/movie/upcoming?language=fr&page=1&region=fr', options)
                .then(response => response.json())
                .then(response => {
                    updateMovie(response.results)
                })
                .catch(err => console.error(err));
        } else if (state === 'toprated') {
            fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr&page=1&region=fr', options)
                .then(response => response.json())
                .then(response => {
                    updateMovie(response.results)
                })
                .catch(err => console.error(err));
        } else if (state === 'endiffusion') {
              fetch('https://api.themoviedb.org/3/movie/now_playing??language=fr&page=1&region=fr', options)
                .then(response => response.json())
                .then(response => {
                    updateMovie(response.results)
                })
                .catch(err => console.error(err));
        } else if (state === 'hasard') {
            fetch('https://api.themoviedb.org/3/movie/popular?language=fr&page=1&region=fr', options)
                .then(response => response.json())
                .then(response => {
                    const randomData = randomMovie(response.results)
                    console.log(randomData)
                    if (randomData === 0){
                        randomData = randomData + 1
                        if (response.results.id === randomData) {
                            updateMovie(response.results)
                        }
                    }
                    
                })
                .catch(err => console.error(err));
        }
    }
    return (
        <>
            <div className="button_div">
                <button onClick={() => changeMovieButton('toprated')}>
                    <p>Top Rated</p>
                </button>
                <button onClick={() => changeMovieButton('endiffusion')}>
                    <p>En diffusion</p>
                </button>
                <button onClick={() => changeMovieButton('avenir')}>
                    <p>A venir</p>
                </button>
                <button onClick={() => changeMovieButton('hasard')}>
                    <p>Aléatoire</p>
                </button>
            </div>
        </>
    )
}