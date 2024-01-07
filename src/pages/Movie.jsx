export default function Movie({ movie }){
    return(
        <>
            <div className="movie_ctn">
                <div className="mov_content_info">
                    <h2>{movie.title}</h2>
                    <div className="mov_content_dtl">
                        <img
                            src={`https://image.tmdb.org/t/p/original/${movieItem.poster_path}`}
                            alt={`Poster for ${movieItem.title}`}
                        />
                        <div className="mov_ctn_dtl_rht">
                            <p>{movie.release_date} en salle</p>
                            {production_companies ?? 
                                production_companies.map((produc, index) => {
                                    <p>Production : {produc.name}</p>
                                })
                            }
                            <p>{movie.homepage} </p>
                        </div>
                    </div>
                    <div className="mov_dtl_note">
                        <div className="mov_dtl_nte">
                            {movie.genres ??
                                movie.genres.map((genre, index) => {
                                    <p>genre.name</p>
                                })
                            }
                            <p>{movie.tagline} </p>
                            <p>{movie.overview} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}