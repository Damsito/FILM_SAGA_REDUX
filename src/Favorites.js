import {useQuery} from "react-query";
import axios from "axios";
import getUrl from "./API/getUrl";
import VerticalList from "./VerticalList";
import React from "react";
import {useSelector} from "react-redux";


function Favorites(){
    function useFilms() {
        return useQuery(["films"], async () => {
            const { data } = await axios.get(
                getUrl()
            );
            return data;
        });
    }
    const {data, error, isLoading, isFetching} = useFilms();
    const favorites = useSelector((state) => state.favorites);
    let films = data?.results.filter(f => favorites.includes(f.id))
    return (
        <section className="overflow-hidden text-gray-700 ">
            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <h1 className={'text-center'}>Mes favoris</h1>
                {error && <div>{error}</div>}
                {(isLoading || isFetching) && <div>Loading movies...</div>}
                {!isLoading && !error && (
                    <VerticalList films={films} />
                )}
            </div>
        </section>
    );
}
export default Favorites