function ReviewCard(props) {
    return (
        <div className="card text-bg-light mb-3">
            <div className="card-header">Vote: {props.review.vote}/5</div>
            <div className="card-body">
                <h5 className="card-title">{props.review.name}</h5>
                <p className="card-text">{props.review.text}</p>
                <p class="card-text"><small class="text-body-secondary">{props.review.created_at}</small></p>
            </div>
        </div >
    )
}

export default ReviewCard;