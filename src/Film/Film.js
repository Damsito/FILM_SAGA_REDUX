
import "../Home/Home.css";
import BackButton from "../Button/BackButton";
import { Link, Navigate, useParams } from "react-router-dom";
import Card from "../Card/Card";
import Details from "../Details/Details";
import Rating from "../Rating/Rating";
import HorizontalList from "../HorizontalList/HorizontalList";
import {useQuery} from "react-query";
import axios from "axios";
import getUrl from "../API/getUrl";
import React from "react";
import VerticalList from "../VerticalList";
// `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
function Film() {
    let { id } = useParams();
    function usePosts() {
        return useQuery(["film", id], async () => {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
            );
            console.log(data)
            return data;
        });
    }
    const {data, error, isLoading, isFetching} = usePosts();
    console.log(data)
    return (
        <div className={"container p-5"}>
            <div className={"w-32 ml-auto"}>
                <Link to="/">
                    <BackButton label={"Retour"} />
                </Link>
            </div>
            {error && <div>{error}</div>}
            {(isLoading || isFetching) && <div>Loading movies...</div>}
            {!isLoading && !error &&
                (
                    <>
                        <div className={"grid grid-cols-2 mt-5"}>
                            <Card film={data} />
                            <Details film={data} />
                        </div>
                        <div className={"mt-5"}>{data.overview}</div>
                        <Rating note={data.vote_average} />
                        <HorizontalList id={data.id} genres={data.genres} />
                    </>
                )

            }

        </div>
    )
}

export default Film;

