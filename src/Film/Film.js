import "../Home/Home.css";
import BackButton from "../Button/BackButton";
import { Link, Navigate, useParams } from "react-router-dom";
import Card from "../Card/Card";
import Details from "../Details/Details";
import Rating from "../Rating/Rating";
import HorizontalList from "../HorizontalList/HorizontalList";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
function Film() {
  let { id } = useParams();
  const dispatch = useDispatch();
  dispatch({ type: "FETCH_ONE_MOVIE", id });
  const data = useSelector((state) => {
    return state.movie;
  });
  if (!data) return <Navigate to="/" replace={true} />;
  return (
    <div className={"container p-5"}>
      <div className={"w-32 ml-auto"}>
        <Link to="/">
          <BackButton label={"Retour"} />
        </Link>
      </div>
      <>
        <div className={"grid grid-cols-2 mt-5"}>
          <Card film={data} />
          <Details film={data} />
        </div>
        <p className={"mt-3"}>{data.overview}</p>
        <Rating note={data.vote_average} />
        <HorizontalList id={id} />
      </>
    </div>
  );
}

export default Film;
