import React from 'react';
import Home from './routes/Home';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Navigation from './component/Navigation';
import Detail from './routes/Detail';

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component= {Detail} />
    </HashRouter>
  );
}

export default App;

// import React from "react"; // 이 코드가 있어야 리액트가 JSX를 이해할 수 있다.
// import axios from 'axios';
// import Movie from './Movie';
// import './App.css';

// class App extends React.Component{
//   state = {
//     isLoading: true,
//     movies:[],
//   };
  
//   getMovies = async () => {
//     const {
//       data: {
//         data: { movies },
//       },
//     }  = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
//     this.setState({movies, isLoading: false})
//   }
  
//   componentDidMount(){
//     // 영화 데이터 로딩!
//     this.getMovies();
//   }

//   render(){
//     const { isLoading, movies} = this.state;
//     return (<section className="container"> 
//           {isLoading ? (
//             <div className="loader">
//               <span className="loader__text">Loading...</span>
//             </div>
//           ) : (<div className="movies">
//            {movies.map(movie=> (
//             <Movie 
//                   key = {movie.id}
//                   id= {movie.id}
//                   year= {movie.year}
//                   title= {movie.title}
//                   summary= {movie.summary}
//                   poster= {movie.medium_cover_image}
//                   genres= {movie.genres}
//             />
//            ))}
//            </div>)}
//     </section>
//     );
//   }
// }

// export default App; // 다른 파일에서 Potato 컴포넌트 사용가능하게함


