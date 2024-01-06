import { useEffect } from "react"

export default function MovieContent({ movie }){

    const seeData = () => {
        console.log(movie)
    }

    useEffect(() => {
        seeData()
    }, [movie])

    return(
        <>
            <div className="movie_content_wth">
                <h2>Listes de films</h2>
                <div className="mov_ctn_div">
                    {movie.map((movie, index) => (
                        <div key={index} className="movie_card">
                            <h3>{movie.title}</h3>
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={`Poster for ${movie.title}`}
                            />
                            <p className="mov_ctn_overview">{movie.overview}</p>
                            <div className="mov_ctn_info">
                                <div className="mov_ctn_ltlinfo">
                                    <p>Date de sortie</p>
                                    <p>{movie.release_date}</p>
                                </div>
                                <div className="mov_ctn_ltlinfo">
                                    <p>Note</p>
                                    <p>{movie.vote_average}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
               
            </div>
        </>
    )
}