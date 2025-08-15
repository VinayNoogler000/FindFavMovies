export default function MovieInfo({ title, date }) {
    return (
        <div className="movie-info">
            <h3 className="movie-title">{ title }</h3>
            <p className="movie-date"> { new Date(date).toLocaleString("en-IN", { day: "numeric",  month: "long", year: "numeric" }) } </p>
        </div>
    );
}