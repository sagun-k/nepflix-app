import React,{useState,useEffect} from 'react'

const MovieList=(props)=> {
    const[movies,setMovies]=useState([]);
   
   
    const getMovieRequest = async ()=>{
        const url=`https://api.themoviedb.org/3/movie/${props.values}?api_key=13fc60a28119eb3334cf1097859e001e`;
         
      
        const response = await fetch(url);
        const responseInJ= await response.json();
        
        console.log(responseInJ);
      
        
         setMovies(responseInJ.results)
        
      }
     
       useEffect(() => {
        getMovieRequest();
      
       }, [])
      
    const styles={width: "11rem",
         
marginRight: "1rem",
marginBottom: "1 rem",
marginLeft: "1rem",
marginTop: "1rem",

}
    return (
        <a className="flex" onClick={props.handleClick} >
            { movies.map((movie,index)=>{
       return <div className="text-xl text-black flex justify-content-between hover:translate-x-2 transition  cursor-pointer hover:delay-100" key={movie.id} style={styles}  >
        <img className=""  src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`} alt="" />
          </div>
        })}
        </a>
    )
}

export default MovieList
