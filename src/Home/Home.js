import "./Home.css";
import {  useState } from "react";
import { useSearchParams } from "react-router-dom";
import Input from "../Input/Input";
import VerticalList from "../VerticalList";
import React from "react";
import {
    useQuery
} from "react-query";
import axios from "axios";
import getUrl from "../API/getUrl";
function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  let filmQuery = searchParams.get("q") || "";
  const [value, setValue] = useState(filmQuery);

  const handleChange = (event) => {
      setValue(event.target.value);
      if (event.key === 'Enter') {
          setSearchParams(event.target.value ? { q: event.target.value } : {});
      }
  }
  const submitButton = (event) => {
        event.preventDefault()
        setSearchParams(value ? { q: value } : {});
    }
    function useFilms() {
        return useQuery(["films", filmQuery], async () => {
            const { data } = await axios.get(
                getUrl(filmQuery)
            );
            return data;
        });
    }
    const {data, error, isLoading, isFetching} = useFilms();
    return (
            <section className="overflow-hidden text-gray-700 ">
              <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <Input value={value} submitButton={submitButton} handleChange={handleChange} />
                  {error && <div>{error}</div>}
                  {(isLoading || isFetching) && <div>Loading movies...</div>}
                  {!isLoading && !error && (
                      <VerticalList films={data?.results} />
                  )}
              </div>
            </section>
  );
}

export default Home;
