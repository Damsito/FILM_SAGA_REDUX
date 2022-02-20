import { Link } from "react-router-dom";
import ButtonFavorites from "../Button/ButtonFavorites";

function Card({ film }) {
  return (
    <div className={"relative"}>
      <Link className={"p-0 m-0"} to={`/films/${film.id}`}>
        {film.poster_path && (
          <>
            <img
              className="block object-cover object-center w-full h-full rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.title}
            />
          </>
        )}
      </Link>
      <div className={"absolute right-3 top-2"}>
        <ButtonFavorites id={film.id} />
      </div>
    </div>
  );
}

export default Card;
