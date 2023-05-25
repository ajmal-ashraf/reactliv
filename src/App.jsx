import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import LayOut from "./Components/LayOut";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import MovieInfo from "./Pages/MovieInfo";
function App() {
  return (
    <div className="App">
      <LayOut>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
      </LayOut>
    </div>
  );
}

export default App;
