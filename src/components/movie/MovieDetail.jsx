import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import JaugeMovieScore from "./JaugeMovieScore"

export default function MovieDetail({ movie }){
    console.log(movie)
    const [releaseYear, setReleaseYear] = useState('')
    const [pourcentageVote, setPourcentageVote] = useState()

    useEffect(() => {
        if(movie.vote_average){
            const pourcentage = movie.vote_average.toFixed(1);
            setPourcentageVote(Math.max(0, Math.min(100, pourcentage)));
        }
    }, [movie])
    // const getDate = () => {
    //     const date = movie.release_date
    //     const dateYear = date.split('-')[0]
    //     setReleaseYear(dateYear)
    // }

    // useEffect(() => {
    //     getDate()
    // }, [])

    return (
        <>
            <div className="movie_ctn">
                <div className="mov_content_info">
                    <div className="mov_content_dtl">
                        <div className="mov_ctn_dtl_imglnk">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={`Poster for ${movie.title}`}
                            />
                            { movie.homepage && 
                                <Link to={movie.homepage}>
                                    <button>
                                        <p>Disponible en streaming</p>
                                        <p>Regarder maintenant</p>
                                    </button>
                                </Link>
                            }
                        </div>
                        <div className="mov_ctn_dtl_rht">
                            <h2>{movie.title} ({movie.release_date && movie.release_date.split('-')[0]})</h2>
                            <div className="mov_dtl_nte_genre">
                                    {movie.genres && movie.genres.map((genres, index) => (
                                        <p>{genres.name}</p>
                                    ))}
                            </div>
                            <JaugeMovieScore pourcentageVote={pourcentageVote} setPourcentageVote={setPourcentageVote} />
                            <div className="mov_dtl_nte">
                                <h3>Compagnie :</h3>
                                <div className="mov_ctn_dtl_rht_compagnie">
                                    {movie.production_companies && movie.production_companies.map((produc, index) => (
                                        <p key={index}>{produc.name}</p>
                                    ))}
                                </div>
                                <div className="mov_overview">
                                    <p>{movie.tagline} </p>
                                    <h3>Synopsis</h3>
                                    <p className="mov_overview_p">{movie.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}