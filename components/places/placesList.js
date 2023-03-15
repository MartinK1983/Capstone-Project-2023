import useApi from "@/hooks/useApi";
import { useEffect, useState } from "react";
import Button from "../buttons/button";
import PageLoader from "../loader/pageLoader";
import PlaceCard from "./placeCard";

export default function PlacesList() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);

    const {
        getAllPlaces,
        createNewPlace
    } = useApi();

    useEffect(() => {
        setLoading(true);

        const abortController = new AbortController();

        const fetchPlaces = async () => {
            const result = await getAllPlaces({abortController: abortController});

            if (abortController.signal.aborted) return;

            setLoading(false);
            setPlaces(result);
        }

        fetchPlaces();

        return () => abortController.abort();
    }, []);

    const addPlace = async () => {
        const res = await createNewPlace();
        if (!res) return;

        const newPlaces = [...places, res];
        setPlaces(newPlaces);
    }

    if (loading) return <PageLoader />
    
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", gap: "10px"}}>
            <Button text="Neuer Datensatz" loadingText="Datensatz wird erstellt..." onClick={addPlace} />
            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                {
                    places && !!places.length
                    ? places.map(p => <PlaceCard key={p.id} place={p} />)
                    : <span>Keine Orte gefunden. Lege einen an!</span>
                }
            </div>
        </div>
    )
}