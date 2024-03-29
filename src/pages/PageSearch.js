import React, { useState } from 'react'
import { ResultCard } from '../components/ResultCard';

export const PageSearch = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = e => {

        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=a87239141e560f2d1ffa1d2c5b416813&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(res => res.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([])
                }
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Search movie by title" value={query} onChange={onChange}></input>
                    </div>
                    {results.length > 0 && (
                        <ul className="results">
                            {results.map(movie => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};
