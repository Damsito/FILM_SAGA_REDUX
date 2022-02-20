
import Card from "../Card/Card";
import {useQuery} from "react-query";
import axios from "axios";
import getUrl from "../API/getUrl";
import React from "react";

function HorizontalList({id}) { function useFilms() {
  return useQuery(["films"], async () => {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`    );
    return data;
  });
}
  const {data, error, isLoading, isFetching} = useFilms();
  let finalArray = data ? data?.results.slice(0,4) : data?.results
  return (
    <div>
      <h1>Contenu similaire</h1>
      {error && <div>{error}</div>}
      {(isLoading || isFetching) && <div>Loading movies...</div>}
      {!isLoading && !error && (
          <div className={"grid grid-cols-4 gap-4"}>
            {finalArray.map((film) => {
              return <Card key={film.id} film={film} />;
            })}
          </div>
      )}
    </div>
  );
}

export default HorizontalList;
