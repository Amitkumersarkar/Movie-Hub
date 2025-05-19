const Movie = ({ movie }) => {
    const { title, director, image, rating, year, genre } = movie;

    return (
        <div className="text-center p-4 gird sm:grid-cols-1 md:grid-cols-3">
            <div className="flex justify-center">
                <img
                    className="w-full max-w-xs h-auto object-contain rounded shadow-md"
                    src={image}
                    alt={title}
                />
            </div>
            <h2 className="text-lg font-semibold mt-4">Name: {title}</h2>
            <p>Director: {director}</p>
            <p>Genre: {genre}</p>
            <p>Year: {year}</p>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Movie;
