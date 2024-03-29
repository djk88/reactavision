import { Link, Navigate, useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { GlobalContext } from '../globals/GlobalState';
import { useContext } from 'react';

export const PageMovieDetails = () => {
  let { id } = useParams();
  const location = useLocation();
  const movie = location.state.movie;
  const [video, setVideo] = useState([]);

  const getVideoDetails = async () => {
    const json = await (await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a87239141e560f2d1ffa1d2c5b416813&language=en-US`)).json()
    setVideo(json.results[0].key)

  }
  useEffect(() => { getVideoDetails() }, [id]);

  const { addToFavoritesList, removeFromFavoritesList, favoriteList } = useContext(GlobalContext)
  let favoriteMovie = favoriteList.find(x => x.id === movie.id);

  var rate = movie.vote_average;
  rate = parseFloat(rate);
  rate = rate * 10

  if (isNaN(id) || id < 0) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="container">
      <div className="detail-container">
        <div className="video-box">
          <iframe src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&loop=1&modestbranding=1&playlist=${video}&controls=0`} allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="video" allowFullScreen frameBorder="0" />
        </div>
        <div className="controls">
          <Link to="/">
            <p className="btn"><i className="fa-fw fa fa-arrow-left"></i></p>
          </Link>
          {favoriteMovie ?
            <button className="btn-remove" onClick={() => removeFromFavoritesList(movie.id)}>
              Remove from Favorites
            </button>
            :
            <button className="btn" onClick={() => addToFavoritesList(movie)}>
              <i className="fa-fw fa fa-heart" title="saveFavoriteButton"></i> Add to Favorites
            </button>
          }
        </div>
        <div className="detail-info">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">{movie.release_date.substring(0, 4)}<span className="rating">Rating: {rate}%</span></h4>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

