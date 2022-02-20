import "./Details.css";
import Genre from "../Genre";
function Details({ film }) {
  let releaseDate = new Date(film.release_date).toLocaleDateString("fr-FR");
  return (
    <div className="max-w-sm rounded overflow-hidden ml-2">
      <div className="pb-2">
        <h1>{film.title}</h1>
        <h2>Sorti le {releaseDate}</h2>
        <div className={"grid mt-5"}>
          {film.genres && film.genres.map((genre) => {
            return <Genre key={genre.id} name={genre.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
