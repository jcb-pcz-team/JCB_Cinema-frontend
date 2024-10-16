import {Home} from './pages/Home/Home.tsx';
import {Header} from "./components/Header/Header.tsx";

export const App = ()=> {
  return (
    <div className="app">
      <Header/>
      <Home/>
    </div>
  )
}
