import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function MoviesList() {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get((`${backendUrl}/movies`)).then((resp) => {
            setMovies(resp.data)
        });
    }, []);

    return (
        <>
            <main className="container">
                <section>
                    <h1>Ecco la lista dei film...</h1>
                    <div className="row row-cols-1 row-cols-sm-2">
                        {
                            movies.map((curMovie, index) => (
                                <div className="col" key={curMovie.id}>
                                    <MovieCard movie={curMovie} />
                                </div>
                            ))
                        }
                    </div>
                </section>
            </main>
        </>
    )
}

export default MoviesList;