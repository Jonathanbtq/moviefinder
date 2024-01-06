import { useState } from "react"

export default function SearshBar(){
    const [movie, setMovie] = useState('')

    const searshMovie = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        let recherche = formData.get('recherche')
        setMovie(recherche)
    }

    return (
        <>
            <form action="" onSubmit={searshMovie}>
                <input type="text" name="recherche" placeholder="Un film?"/>
                <input type="submit" placeholder="Recherchez" />
            </form>
        </>
    )
}