import { useEffect, useState } from 'react';
import './Movies.css';
import Movie from '../Movie/Movie';
const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('moviesData.json')
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []);

    return (
        <>
            {/* <h1 className='text-center pb-3'>Available Movies : {movies.length}</h1> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 place-items-center">
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}></Movie>)
                }
            </div>
        </>
    );
};

export default Movies;