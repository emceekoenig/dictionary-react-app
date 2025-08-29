import "./Error.css";

export default function Error() {
  function handleReload() {
    window.location.reload();
  }

  return (
    <div className="Error">
      <section className="mb-5">
        {" "}
        <h1>
          Sorry pal, we could not find definitons for the word you were looking
          for...{" "}
          <a
            href="/"
            className="partOfSpeech reload"
            onClick={handleReload}
            rel="noreferrer"
          >
            try another word?
          </a>
        </h1>
      </section>
    </div>
  );
}
