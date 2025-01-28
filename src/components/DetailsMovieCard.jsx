import { Link, NavLink } from "react-router-dom";

function DetailsMovieCard(props) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    return (
        <>
            <div className="card bg-secondary-subtle mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.movie.image ? `${backendUrl}/${props.movie.image}` : `https://placehold.co/600x400`} className="img-fluid rounded-start object-fit-cover border rounded h-100" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title fs-1">{props.movie.title}</h1>
                            <h2 className="card-text fs-2">{props.movie.director}</h2>
                            <p className="card-text fs-3">Description: {props.movie.abstract}</p>
                            <p className="card-text fs-4">Vote: {props.movie.vote_avg}/5</p>
                            <p className="card-text fs-5">Genre: {props.movie.genre}</p>
                            <p className="card-text fs-5">Year: {props.movie.release_year}</p>
                            <Link to={'/movies'} className="btn btn-outline-secondary btn-lg">Return</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsMovieCard;