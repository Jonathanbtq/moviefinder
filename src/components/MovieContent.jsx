import { useEffect } from "react";

export default function MovieContent({ movie }) {
    const renderMovieCard = (movieItem, index) => (
        <div key={index} className="movie_card">
            <img
                src={`https://image.tmdb.org/t/p/original/${movieItem.poster_path}`}
                alt={`Poster for ${movieItem.title}`}
            />
            <div className="mov_ctn_otherinfo">
                {movieItem.adult === false ? <p>Tout public</p> : <p>Adult</p>}
                <p>{movieItem.original_language}</p>
            </div>
            {/* <h3>{movieItem.title}</h3>
            <p className="mov_ctn_overview">{movieItem.overview}</p>
            <div className="mov_ctn_info">
                <div className="mov_ctn_ltlinfo">
                    <p>Date de sortie</p>
                    <p>{movieItem.release_date}</p>
                </div>
                <div className="mov_ctn_ltlinfo">
                    <p>Note</p>
                    <p>{movieItem.vote_average}</p>
                </div>
            </div> */}
        </div>
    );

    return (
        <>
            <div className="movie_content_wth">
                <h2>Listes de films</h2>
                <div className="mov_ctn_div">
                    {movie.length > 1 ? (
                        movie.map((movieItem, index) =>
                            movieItem.poster_path && renderMovieCard(movieItem, index)
                        )
                    ) : (
                        movie.poster_path && renderMovieCard(movie, 0)
                    )}
                </div>
            </div>
        </>
    );
}