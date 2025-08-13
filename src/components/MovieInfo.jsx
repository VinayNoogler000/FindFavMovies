export default function MovieInfo({ title, date }) {
    return (
        <div className="movie-info">
            <h3 className="movie-title">{ title }</h3>
            <p className="movie-date"> { date } </p>
        </div>
    );
}