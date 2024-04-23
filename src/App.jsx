import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import UeberUns from "./pages/UeberUns.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
      </Routes>
    </Router>
  );
}

export default App;
