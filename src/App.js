import React,{useState,useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import MovieList from './components/MovieList';
import ListHeader from './components/ListHeader'
import SearchMoviesList from './components/SearchMoviesList';
// import MovieDisplay  from './components/MovieDisplay';

//This is for searching movies
 const App=()=> {
  const [searchMovies, setSearchmovies] = useState([]);

  
  const [searchvalue,setSearchvalue]=useState("")
  if(searchvalue===""){
    setSearchvalue("Avengers")
  }

  const getMoviesRequest= async ()=>{
     
      const url= ` https://api.themoviedb.org/3/search/movie?api_key=13fc60a28119eb3334cf1097859e001e&query=${searchvalue}`
      
      
      const response= await fetch(url);
      const responseJ= await response.json();
      
  console.log(responseJ.results)
 
  setSearchmovies(responseJ.results)
      
}
  //This function handle the input value
  function handleSearch(events) {
    const value = events.target.value;
    setSearchvalue(value);
  }
  useEffect(() => {
     getMoviesRequest(); 
     
  },[searchvalue])

  return (
    <>
    {/* <MovieDisplay  /> */}
    <div>
      <Navbar  handleSearch={handleSearch}  />
      <div>
        <div>
          <ListHeader heading="Your Search(Here Avengers is Searched)"/>
        </div>
      <div className="grid grid-rows-1 justify-content-around overflow-x-auto" >
        <div className="grid-start-1 grid-end-2  flex" >

      <SearchMoviesList searchMovies={searchMovies} searchvalue={searchvalue} />
       </div>
      </div>
      </div>
      <div>
        Popular  
      
      <div>
        <div>
          <ListHeader heading="Top Rated Movies" />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
        </div>
      <div className="grid grid-row-1 justify-content-around overflow-x-auto" >
        <div className="row-start-1 row-end-2 flex" >
        popular wala yo 
       <MovieList values="top_rated"  />
            </div>  
           
      </div>
      </div>
       latest  
      <div className="mt-10" >
        <div>
          <ListHeader heading="Popular Movies" />
        </div>
       <div className="grid grid-row-1 justify-content-around overflow-x-auto" >
        <div className="row-start-1 row-end-2 flex" >
       
        <MovieList values="popular"  /> 
            </div>  
      </div> *
      </div>
        Upcoming  
      <div className="mt-10" >
        <div>
          <ListHeader heading="Upcoming Movies" />
        </div>
       <div className="grid grid-row-1 justify-content-around overflow-x-auto" >
        <div className="row-start-1 row-end-2 flex" >
       
        <MovieList values="upcoming"  /> 
            </div>  
      </div> 
      </div>
      Now pLaying 
      <div className="mt-10" >
        <div>
          <ListHeader heading="Now Playing" />
        </div>
       <div className="grid grid-row-1 justify-content-around overflow-x-auto" >
        <div className="row-start-1 row-end-2 flex" >
       
        <MovieList values="now_playing"  /> 
            </div>  
      </div> 
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
