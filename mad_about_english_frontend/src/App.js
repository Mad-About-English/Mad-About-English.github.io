import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
    <BrowserRouter location={history.location}>
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
        {/* <Route path="" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
