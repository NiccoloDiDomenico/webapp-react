import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import MoviesList from "./pages/MoviesList";
import ShowDetails from "./pages/ShowDetails";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MoviesList />} />
            <Route path="/movies/:id" element={<ShowDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App
