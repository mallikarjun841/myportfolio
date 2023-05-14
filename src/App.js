import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Project";
import Certifications from "./certification";
import Headers from "./Header";
import "boxicons";
import "./App.css";
import { MakeProvider } from "./demo/demo";

function App() {
  return (
    <div className="App">
      <MakeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/" element={<Projects />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/certifications/" element={<Certifications />} />
            <Route path="/about/" element={<About />} />
          </Routes>
        </BrowserRouter>
      </MakeProvider>
    </div>
  );
}

export default App;
