
import "../Home/Home.css";
import BackButton from "../Button/BackButton";
import { Link, Navigate, useParams } from "react-router-dom";
import Card from "../Card/Card";
import Details from "../Details/Details";
import Rating from "../Rating/Rating";
import HorizontalList from "../HorizontalList/HorizontalList";

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
const OVERVIEW_SIZE = 120;

function Film() {
    const [expand, setExpand] = useState(false);
    const toggle = () => setExpand(!expand);
    let { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "FETCH_ONE_MOVIE", id });
    }, [dispatch, id])
    const data = useSelector((state) => {
        return state.movie
    });
    if (!data) return <Navigate to="/" replace={true} />;
    console.log(data.overview)
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
                <p className={"mt-3"}>
                    { data.overview.substring(
                        0,
                        expand ? data.overview.length - 1 : OVERVIEW_SIZE
                    )}
                    {!expand && data.overview.length > OVERVIEW_SIZE ? "..." : ""}
                    {!expand && (
                        <>
                            <br />
                            <button onClick={toggle}>
                                Lire plus
                            </button>
                        </>
                    )}
                </p>
                <Rating note={data.vote_average} />
                <HorizontalList id={data.id} genres={data.genres} />
            </>
        </div>
    )
}

export default Film;

