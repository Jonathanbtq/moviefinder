import { useState } from "react"

export default function SearshBar({ updateMovie, options }){
    const handleSubmitMovie = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        let recherche = formData.get('recherche')

        fetch(`https://api.themoviedb.org/3/search/movie?query=${recherche}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => {
                updateMovie(response.results)
            })
            .catch(err => console.error(err));
    }

    return (
        <>
            <form action="" onSubmit={handleSubmitMovie}>
                <input type="text" name="recherche" placeholder="Un film?"/>
                <input type="submit" placeholder="Recherchez" />
            </form>
        </>
    )
}