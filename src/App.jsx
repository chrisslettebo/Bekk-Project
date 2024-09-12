import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import page_1 from "./Side1/page_1";

function App() {
  return (
    <div className="card">
      <h1>Velkommen idiot! 👋</h1>
      <p>
        Du kan se koden for dette prosjektet{" "}
        <a href="https://github.com/bekk/prosjektutgangspunkt">
          Link til tekst oppgven
        </a>
    
      </p>
      <p>
          Link til tekst oppgven
      </p>
      <>
      <Router>  
        <Routes>
          <Route
            exact
            path="/page_1"
            element={<page_1/>}
          />
         </Routes>
      </Router>
      </>
      <p>
        Du kan ingenting <code>src/App.jsx</code>
      </p>
    </div>
  );
}

export default App;
