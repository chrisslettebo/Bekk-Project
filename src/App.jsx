import "./App.css";
import page_1 from "/Side1/page_1.jsx"
import Link from "next/link";

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
      </p>
        <Link href="/page_1"> 
            Link til neste
        </Link>
      <p>
        Du kan ingenting <code>src/App.jsx</code>
      </p>
    </div>
  );
}

export default App;
