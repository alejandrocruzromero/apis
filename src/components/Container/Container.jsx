import { useState } from 'react';
import MovieList from '../MovieList/MovieList';
import './Container.css';


function Container() {
    // const MoviesMock =[
    //     {
    //         id:1,
    //         title:"peli 1",
    //         description:"La primerPerlicua"
    //     },
    //     {
    //         id:2,
    //         title:"peli 2",
    //         description:"La segunda Perlicua"
    //     },
    // ]

    const [moviesFetch,setMoviesFetch] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const fetchMovies = () =>{
        setIsLoading(true)
        fetch('https://joinet.com/wp-json/wc/v3/products/?consumer_key=ck_1b97c8e55de58296d792f150cbeb987f0097fa34&consumer_secret=cs_159bb5346697bd2acce4641021b86f78eace4455') 
        .then((response) => {return response.json()})
        //con este trae los nombres tal cual los tiene el json de la api
        //  .then((data) => setMoviesFetch(data.results))
        //  setIsLoading(false)
        
        //si quieres personalizar los campos es con esto
        
        .then((data) =>{          
          console.log(data)
            const moviesFetchOwn = data.results.map((movieData) =>{
                return{                  
                    id:movieData.id,
                    title:movieData.name,
                    description: movieData.slug
                }
            })    
         setMoviesFetch(moviesFetchOwn)
         setIsLoading(false)
        })
         .catch((err) => {
          console.log(err);
        });
         //FIN
    }
  return (

    
  <div className="container">
    <button onClick={fetchMovies}>Cargar</button>
    {isLoading && <p>loading...</p>}
    <MovieList movies={moviesFetch}/>
  </div>
  );
}

export default Container;
