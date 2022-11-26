import React from 'react';
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './Search.svg';

const API_URL = process.env.REACT_APP_API ;

const movie1 = {
    "Title": "Hollywood's Master Storytellers: Spiderman Live",
    "Year": "2006",
    "imdbID": "tt2158533",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('movie');
    },[]);
    return (
        <div className='app'>
            <h1>VMovies</h1>

            <div className='search'>
                <input 
                placeholder='Search for a movie'
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt='Search Image'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0 
                    ? ( <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h3>No movies found</h3>
                        </div>
                    )
            }
            

            
        </div>
    );
};

export default App;

// 73673729
