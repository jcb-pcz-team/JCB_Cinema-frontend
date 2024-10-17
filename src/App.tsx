import {Home} from './pages/Home/Home.tsx';
import {Header} from "./components/Header/Header.tsx";

import "./App.scss";
import {MovieSection} from "./components/MovieSection/MovieSection.tsx";

export const App = ()=> {
    const movies = [
        { id: 1, title: 'SPIDER-MAN', imageUrl: 'src/assets/images/spider-man.png' },
        { id: 2, title: 'SPIDER-MAN', imageUrl: 'src/assets/images/spider-man.png' },
        { id: 3, title: 'SPIDER-MAN', imageUrl: 'src/assets/images/spider-man.png' },
        { id: 4, title: 'SPIDER-MAN', imageUrl: 'src/assets/images/spider-man.png' },
        { id: 5, title: 'SPIDER-MAN', imageUrl: 'src/assets/images/spider-man.png' },
        { id: 6, title: 'SPIDER-MAN', imageUrl: 'src/assets/images/spider-man.png' },
        { id: 7, title: 'SPIDER-MAN', imageUrl: 'src/assets/images/spider-man.png' },
        { id: 8, title: 'SPIDER-MAN', imageUrl: 'src/assets/images/spider-man.png' },
        { id: 9, title: 'SPIDER-MAN', imageUrl: 'src/assets/images/spider-man.png' },
        { id: 10, title: 'SPIDER-MAN', imageUrl: 'src/assets/images/spider-man.png' },
        { id: 11, title: 'SPIDER-MAN', imageUrl: 'src/assets/images/spider-man.png' },
        { id: 12, title: 'SPIDER-MAN', imageUrl: 'src/assets/images/spider-man.png' },
    ];

  return (
    <div className="app">
      <Header/>
      <Home/>
      <MovieSection title="KUP BILET" movies={movies}/>
        <MovieSection title="WKRÓTCE" movies={movies}/>
    </div>
  )
}
