import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import News from "./components/News/News";
import Films from "./pages/Films/Films";
import Movie from "./pages/Movie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/films" element={<Films />}></Route>
        <Route path="/movie" element={<Movie />}></Route>

        {/* not found */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
