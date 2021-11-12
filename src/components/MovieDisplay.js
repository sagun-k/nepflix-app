import React,{useState,useEffect} from 'react'

const MovieDisplay=(props)=> {
    const [moviedisp,setMoviedisp]=useState("")
    const[displaymovie,setDisplaymovie]=useState({})
   const handleClick= async ()=>{
       const url="https://api.themoviedb.org/3/movie/580489?api_key=13fc60a28119eb3334cf1097859e001e"
       const response= await fetch(url);
       const responseJ = await response.json()
       console.log(responseJ.poster_path)
             setDisplaymovie(responseJ)
   }
   useEffect(() => {
       handleClick();
   })
   const styles={width: "11rem",
         
   marginRight: "1rem",
   marginBottom: "1 rem",
   marginLeft: "1rem",
   marginTop: "1rem",
   
   }
    return (
       <>
         {Object.keys(displaymovie).map(function(key, index) {
              return <div className="text-white" >
                  {displaymovie[key]}
              </div>
})}

       </>
    )
}

export default MovieDisplay
