import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <span>Synonyms: </span>
        {props.synonyms.map((synonym, index) => (
          <span key={index}>
            {synonym}
            {index !== props.synonyms.length - 1 && ", "}
          </span>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
