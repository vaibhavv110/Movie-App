const API_KEY = "6237f86abb87275e894b28c87b16d243";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&
    language=es-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&
    with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&
    language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&
    with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&
    with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&
    with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&
    with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&
    with_genres=99`,
};

export default requests;