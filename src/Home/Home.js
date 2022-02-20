import "./Home.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Input from "../Input/Input";
import VerticalList from "../VerticalList";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  let filmQuery = searchParams.get("q") || "";
  const [value, setValue] = useState(filmQuery);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.key === "Enter") {
      setSearchParams(event.target.value ? { q: event.target.value } : {});
    }
  };
  const submitButton = (event) => {
    event.preventDefault();
    setSearchParams(value ? { q: value } : {});
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES", value: filmQuery });
  }, [dispatch, filmQuery]);
  const movies = useSelector((state) => state.movies);
  return (
    <section className="overflow-hidden text-gray-700 ">
      <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <Input
          value={value}
          submitButton={submitButton}
          handleChange={handleChange}
        />
        <VerticalList films={movies} />
      </div>
    </section>
  );
}

export default Home;
