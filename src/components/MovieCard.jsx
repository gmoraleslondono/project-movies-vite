export const MovieCard = ({ image, title, date }) => {
    return (
        <div className="movie-card">
            <img src={ image } alt="movie image" />
            <div className="movie-preview-info">
                <h2>{ title }</h2>
                <p>Released: { date } </p>
            </div>
        </div>
      );
}
