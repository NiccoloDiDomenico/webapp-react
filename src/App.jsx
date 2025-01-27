import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import MoviesList from "./pages/MoviesList";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MoviesList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App
