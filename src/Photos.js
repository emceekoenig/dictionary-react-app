export default function Photos(props) {
  if (props.photos && props.photos.length > 0) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.slice(0, 2).map((photo, index) => (
            <div
              className="col-12 col-sm-6"
              key={index}
            >
              <a
                href={photo.src.original}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={photo.src.landscape}
                  className="img-fluid mb-3 rounded"
                  alt={photo.alt}
                  title={photo.alt}
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
