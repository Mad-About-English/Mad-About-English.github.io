// import * as ReactDOM from "react-dom";
// import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Navbar, linksArray } from "../src/Component/Navbar";

import Home from "./Component/Home";
import About from "./Component/About";
import Classes from "./Component/Classes";
import { Location, base } from "../src/Component/Location";
import Events from "./Component/Events";
import Testimonials from "./Component/Testimonials";
import Contact from "./Component/Contact";

const history = createMemoryHistory();

function App() {
  return (
    // ReactDOM.render(
    // <HashRouter>
    <BrowserRouter
      // location={history.location}
      basename={process.env.PUBLIC_URL}
    >
      <Navbar links={linksArray} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/classes"
          element={
            <>
              <Classes />
            </>
          }
        />
        <Route
          path="/location"
          element={
            <>
              <Location homebase={base} />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <Events />
            </>
          }
        />
        <Route
          path="/testimonials"
          element={
            <>
              <Testimonials />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
    // </HashRouter>)
  );
}

export default App;
