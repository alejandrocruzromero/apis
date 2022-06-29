import './MovieList.css';
import Movie from '../Movie/Movie'
function MovieList(props) {
    return (
        <div className = "movies-list">
            {props.movies.map((movie) => (
                    <Movie 
                        title = {movie.title} 
                         description = {movie.description}
                       // description = {movie.opening_crawl}
                    />
                ))
            }
           </div>
    );
}
export default MovieList;
