import { useEffect, useState } from "react"

export default function MovieDetail({ movie }){
    console.log(movie)
    const [releaseYear, setReleaseYear] = useState('')

    const getDate = () => {
        const date = movie.release_date
        const dateYear = date.split('-')[0]
        setReleaseYear(dateYear)
    }

    useEffect(() => {
        getDate()
    }, [])

    return (
        <>
            <div className="movie_ctn">
                <div className="mov_content_info">
                    <div className="mov_content_dtl">
                        <img
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            alt={`Poster for ${movie.title}`}
                        />
                        <div className="mov_ctn_dtl_rht">
                            <h2>{movie.title} {releaseYear}</h2>
                            <p>{movie.release_date} en salle</p>
                            {movie.production_companies && movie.production_companies.map((produc, index) => (
                                <p key={index}>Production : {produc.name}</p>
                            ))}
                            <p>{movie.homepage} </p>
                            <div className="mov_dtl_nte">
                                {movie.genres && movie.genres.map((genres, index) => (
                                    <p>{genres.name}</p>
                                ))}
                                <p>{movie.tagline} </p>
                                <p>{movie.overview} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}