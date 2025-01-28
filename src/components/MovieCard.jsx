import { Link, NavLink } from "react-router-dom";

function MovieCard(props) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    return (
        <div className="card bg-secondary-subtle mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.movie.image ? `${backendUrl}/${props.movie.image}` : `https://placehold.co/600x400`} className="img-fluid rounded-start object-fit-cover border rounded h-100" alt={props.movie.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.movie.title}</h5>
                        <h6 className="card-text">{props.movie.director}</h6>
                        <p className="card-text">{props.movie.genre}</p>
                        <p className="card-text">{props.movie.release_year}</p>
                        <Link to={`/movies/${props.movie.id}`} className="btn btn-outline-secondary btn-sm">Show details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;