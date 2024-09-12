import "./App.css";

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
        Noe
        <Link to="/">page_1</Link>
      </p>
      <Route exact path="/Side1" component={page_1} />
      <p>
        Du kan ingenting <code>src/App.jsx</code>
      </p>
    </div>
  );
}

export default App;
