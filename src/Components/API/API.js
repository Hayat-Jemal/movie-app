const apiKey = process.env.REACT_APP_API_KEY;

 export async function getMoviesBySearchTitle(userInput, type) {
   const res = await fetch(
     `http://www.omdbapi.com/?apikey=${apiKey}&s=${userInput}`
   );
   const data = await res.json();
   const file = data.Search;
   let movies = [];
   file.forEach((element) => {
     if (element.Type === type) {
       movies.push(element);
     }
   });
    console.log(movies)
   return movies;
 }

export async function getMovieDetailsById(id) {
  
  // const request = await fetch(Utils.MovieDetail);
  const request = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
  );
  const data = await request.json();
  return data;
  // console.log(data)
}
