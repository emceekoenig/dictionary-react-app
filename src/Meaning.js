import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <em className="example">{props.meaning.example}</em>

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
