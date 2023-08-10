import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <a
              href="/"
              alt="Dictionary Homepage"
              title="Dictionary Homepage"
            >
              Dictionary
            </a>
          </h1>
        </header>

        <main>
          <Dictionary defaultKeyword="buzzword" />
        </main>

        <footer className="mt-3">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
