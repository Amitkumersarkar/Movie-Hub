const Movie = ({ movie }) => {
    const { title, director, image, rating, year, genre } = movie;

    return (
        <div>
            <div className="flex justify-center">
                <img
                    className="w-full  max-w-xs h-auto object-contain rounded shadow-md"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="text-center">
                <h2 className="text-lg font-semibold mt-4 "> {title}</h2>
                <p>Director: {director}</p>
                <p>Genre: {genre}</p>
                <p>Year: {year}</p>
                <p>Rating: {rating}</p>
            </div>
        </div>
    );
};

export default Movie;
