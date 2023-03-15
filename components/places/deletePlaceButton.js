import useApi from "@/hooks/useApi";
import Button from "../buttons/button";

export default function DeletePlaceButton({id = ""} = {}) {
    const {
        deletePlaceById
    } = useApi();

    const onClick = async () => await deletePlaceById({id: id});

    return <Button loadingText="Ort wird gelöscht..." onClick={onClick} text="Löschen" />
}