import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function MoviesList() {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    function getMovie() {
        const params = {};
        if (search.length > 0) {
            params.search = search
        }

        axios.get(`${backendUrl}/movies`, { params }).then((resp) => {
            setMovies(resp.data)
        });
    };

    useEffect(() => {
        getMovie()
    }, []);

    return (
        <>
            <main className="container">
                {/* Search input */}
                <section className="my-4">
                    <h1>Ecco la lista dei film...</h1>
                    <div className="d-flex my-4">
                        <input
                            value={search}
                            onChange={(event) => setSearch(event.target.value)} type="search"
                            className="form-control"
                            placeholder="Cerca i tuoi film preferiti..."
                        />
                        <button onClick={getMovie} className="btn btn-outline-secondary btn ms-2">Search</button>
                    </div>
                </section>
                {/* Movies List */}
                <section>
                    {
                        movies.length > 0 ? (
                            <div className="row row-cols-1 row-cols-sm-2">
                                {
                                    movies.map((curMovie, index) => (
                                        <div className="col" key={curMovie.id}>
                                            <MovieCard movie={curMovie} />
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <div className="alert alert-secondary">Nessun film trovato, riprova!</div>
                        )
                    }
                </section>
            </main>
        </>
    )
}

export default MoviesList;