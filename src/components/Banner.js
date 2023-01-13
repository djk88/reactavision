import React, { useState } from 'react'
import { useEffect } from 'react';
import { API_KEY } from '../globals/GlobalState';

const TOP_RATED_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const Banner = () => {

    const [banner, setBanner] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(TOP_RATED_API);
            const data = await response.json();
            setBanner(data.results[Math.floor(Math.random() * data.results.length)]);
        }
        fetchData()
    }, []);

    return (
        <div className="random-banner">
            <div className='inner'>
                {banner.backdrop_path &&

                    (<img
                        src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`}
                        alt={`${banner.title} Poster`}
                    />)
                }
            </div>
        </div>
    )
}
