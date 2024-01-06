export default function MenuButton({ updateMovie }){

    const changeMovieButton = (state) => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFjZWM2NWFmMDRmOWY0Njk5M2UxM2RjOWRlZDFiNiIsInN1YiI6IjY1OTk5ZGQ4ODliNTYxMDA5NDhiODJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oAD2ebs7sBFTF0wEGVVwUNd1uoN-nynXJJOqNnXFwYE'
            }
        };
        if (state === 'avenir') {    
              fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
                .then(response => response.json())
                .then(response => {
                    updateMovie(response.results)
                })
                .catch(err => console.error(err));
        } else if (state === 'toprated') {
              fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
                .then(response => response.json())
                .then(response => {
                    updateMovie(response.results)
                })
                .catch(err => console.error(err));
        } else if (state === 'endiffusion') {
              fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
                .then(response => response.json())
                .then(response => {
                    updateMovie(response.results)
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
            </div>
        </>
    )
}