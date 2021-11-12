import React from 'react'

const SearchMoviesList=(props)=> {
//     const [search,setSearch]=useState([])
//     const [searchValue,setSearchValue]=useState("")
//     const getSearchRequest= async ()=>{
//         const url=`https://api.themoviedb.org/3/search/movie?api_key=13fc60a28119eb3334cf1097859e001e&query=${searchValue}`
//         const serachResponse= await fetch(url)
//         const searchResponesinJson= await serachResponse.json();
//         console.log(searchResponesinJson.results);
//         if(searchResponesinJson.results.Search){
//         setSearch(searchResponesinJson.results)
//         }
//     }
//     useEffect(() => {
      
//         getSearchRequest();
//        }, [searchValue])
       const styles={width: "11rem",
         
marginRight: "1rem",
marginBottom: "1 rem",
marginLeft: "1rem",
marginTop: "1rem",

}
 
    return (
    <a className="flex" >   
              
            
           {
            
               props.searchMovies.map((movie,index)=>{
                return <div className="text-xl text-black flex justify-content-between hover:translate-x-2 transition  cursor-pointer hover:delay-100" key={movie.id} style={styles}  >
                 <img className=""  src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`} alt="" />
                   </div>
                 })}
             
           
        
        </a>
    )
            
            
}


export default SearchMoviesList
