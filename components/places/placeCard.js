import { applySchema } from "@/util/schema";
import { useState } from "react";
import CreateOrUpdatePlaceForm from "./createOrUpdatePlaceForm";
import DeletePlaceButton from "./deletePlaceButton";

export default function PlaceCard({place = {}} = {}) {
    const [data, setData] = useState(applySchema(place));

    if (!data) return null;

    const saveData = (d) => setData(d);

    const rowStyle = {display: "flex", flexDirection: "column", alignItems: "start", width: "100%", gap: "10px"};

    return (
        <div style={{border: "1px solid black", margin: "5px", padding: "5px"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={rowStyle}>
                    <span>Postleitzahl</span>
                    <span>{data.zipCode || "-"}</span>
                </div>
                <div style={rowStyle}>
                    <span>Stadt</span>
                    <span>{data.city || "-"}</span>
                </div>
                <div style={rowStyle}>
                    <span>Straße</span>
                    <span>{data.street || "-"}</span>
                </div>
                <div style={rowStyle}>
                    <span>GPS-Koordinaten</span>
                    <span>{data.gps || "-"}</span>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <DeletePlaceButton id={data.id} />
                <CreateOrUpdatePlaceForm place={data} saveData={saveData} />
            </div>
        </div>
    )

}