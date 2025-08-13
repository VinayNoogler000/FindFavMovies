export default function MovieImage({ imgUrl, movieTitle }) {
    return (
        <div className="movie-image">
            <img src={imgUrl} alt={movieTitle + "image"} loading="lazy"></img>
        </div>
    );
}