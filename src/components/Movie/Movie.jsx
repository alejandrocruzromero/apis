import './Movie.css';

function Movie(props) {
  return (
   <div className="movie">
    <h2>{props.title}</h2>
    <p>{props.description}</p>    
   </div>
  );
}
export default Movie;
