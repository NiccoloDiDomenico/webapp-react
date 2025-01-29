import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import DetailsMovieCard from "../components/DetailsMovieCard";
import ReviewForm from "../components/ReviewForm";

function ShowDetails() {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const { slug } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`${backendUrl}/movies/${slug}`).then((resp) => {
            // console.log(resp.data);
            setMovie(resp.data)
        });
    }, []);

    return (
        <>
            {
                movie && (
                    <>
                        {/* Details */}
                        <section className="container py-4">
                            <h1 className="text-center">Details</h1>
                            <DetailsMovieCard key={movie.id} movie={movie} />
                        </section>
                        {/* Reviews */}
                        <section className="container pb-2">
                            <h2 className="text-center pb-4">Reviews</h2>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                                {
                                    movie.reviews.map((curReview) => (
                                        <div className="col">
                                            <ReviewCard
                                                key={curReview.id}
                                                review={curReview}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                        {/* Add review */}
                        <section className="container py-4">
                            <h2 className="text-center pb-4">Add your review</h2>
                            <ReviewForm />
                        </section>
                    </>
                )
            }
        </>
    )
}

export default ShowDetails;