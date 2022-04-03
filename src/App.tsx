import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies/type";
import Login from "./pages/Login/type";
import Theaters from "./pages/Theaters/type";
import WithoutNav from "./components/WithoutNav/type";
import WithNav from "./components/WithNav/type";
import EditInformation from "./pages/EditInformation/type";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/movies" element={<Movies />} />
            <Route path="/theaters" element={<Theaters />} />
            <Route path="/edit-information" element={<EditInformation />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
