import useApi from "@/hooks/useApi";
import { applySchema } from "@/util/schema"
import { useState } from "react"
import Button from "../buttons/button";
import Form from "../forms/form";
//import TextInput from "../forms/TextInput";//

export default function CreateOrUpdatePlaceForm({place = {}, saveData = null} = {}) {

    const [formVisible, setFormVisible] = useState(false);
    const [data, setData] = useState(applySchema(place));

    const {
        updatePlaceById
    } = useApi();

    const handleInput = (e) => {
        if (!e) return;

        e.preventDefault();

        if (!e.target || !e.target.name) return;

        const key = e.target.name;
        const value = e.target.value;

        const newData = {...data, [key]: value};
        setData(newData);
    }

    const updatePlace = async () => {
        const res = await updatePlaceById({id: data.id, update: data});
        setData(res);
        // setFormVisible(false);
        if (saveData && typeof saveData === "function") saveData(res);
    }

    return (
        <div>
            <Button onClick={() => setFormVisible(!formVisible)} text={formVisible ? "Schließen" : "Ändern"} />
            {
                formVisible && (
                    <div>
                        <Form>
                            <TextInput name="zipCode" label="Postleitzahl" onChange={handleInput} />
                            <TextInput name="city" label="Stadt" onChange={handleInput} />
                            <TextInput name="street" label="Straße" onChange={handleInput} />
                            <TextInput name="gps" label="GPS-Koordinaten" onChange={handleInput} />
                            <Button isSubmit onClick={updatePlace} loadingText="Wird gespeichert..." text="Speichern" />
                        </Form>
                    </div>
                )
            }
        </div>
    )
}