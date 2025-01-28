import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function MoviesList() {
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");

    const genres = ["Action", "Crime", "Romance", "Science Fiction"];
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let year = 1970; year <= currentYear; year++) {
        years.push(year);
    };


    function getMovie() {
        const params = {};

        if (search.length > 0) {
            params.search = search
        }

        if (genre !== "") {
            params.genre = genres[genre]
        }

        if (year !== "") {
            params.release_year = years[year]
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
                        <select
                            class="form-select"
                            aria-label="Default select example"
                            value={genre}
                            onChange={(event) => setGenre(event.target.value)}>
                            <option selected>Genere...</option>
                            {
                                genres.map((curGenre, index) => (
                                    <option key={index} value={index}>{curGenre}</option>
                                ))
                            }
                        </select>
                        <select
                            class="form-select"
                            aria-label="Default select example"
                            value={year}
                            onChange={(event) => setYear(event.target.value)}>
                            <option selected>Yaer...</option>
                            {
                                years.map((curGenre, index) => (
                                    <option value={index}>{curGenre}</option>
                                ))
                            }
                        </select>
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