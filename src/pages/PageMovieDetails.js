import { Link, Navigate, useParams, useLocation } from "react-router-dom";

export const PageMovieDetails = () => {
  let { id } = useParams();
  const location = useLocation();
  const movie = location.state.movie;

    if (isNaN(id) ||  id < 0 ) {
      return <Navigate to="/" replace={true} />;
    }
    
  
    return (
    <div className="detail">
      <div className="detail-container">
        <div className="detail-wrapper">
            {movie.poster_path ? (<img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={`${movie.title} Poster`} />
            ) : (
                <div className="filler-poster"></div>
            )}
        </div>
        <div className="info">
            <h3 className="title">{movie.title}</h3>
            <h4 className="release-date">{movie.release_date.substring(0, 4)}</h4>
            <h4 className="rating">Rating: {movie.vote_average}</h4>
            <p className="overview">{movie.overview}</p>
        </div>
      </div>
      <div className="link">
      <Link to="/">
          Back to Main Page
      </Link>
      </div>
    </div>
    );  
}

