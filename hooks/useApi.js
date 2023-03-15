import { Methods } from "@/util/apiUtil";
import { ApiError } from "next/dist/server/api-utils";
import { APP_CLIENT_INTERNALS } from "next/dist/shared/lib/constants";

const ApiRoutes = {
    GetAll: '/places',
    ById: (id) => `/place/${id}`,
    New: '/places/new'
}

export default function useApi() {
    const callApi = async (method, endpoint, {body = null, abortController = null} = {}) => {
        try {
            const res = await fetch(`http://localhost:3002/api${endpoint}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                signal: abortController ? abortController.signal : undefined,
                body: body ? JSON.stringify(body) : undefined,
                method: method
            });

            if (!res) return null;

            if (res.status < 200 || res.status > 300) return null;

            const contentType = res.headers.get("content-type");

            if (contentType && contentType.indexOf("application/json") === -1) return await res.text();
            else if (res.body) return await res.json();
            else return true;
        }
        catch (err) {
            console.error(err);
            return null;
        }
    }

    const createNewPlace = async () => await callApi(Methods.POST, ApiRoutes.New);
    const getAllPlaces = async ({abortController = null} = {}) => await callApi(Methods.GET, ApiRoutes.GetAll, {abortController: abortController});
    const getPlaceById = async ({abortController = null, id = ""} = {}) => await callApi(Methods.GET, ApiRoutes.ById(id), {abortController: abortController});
    const updatePlaceById = async ({id = "", update = {}} = {}) => await callApi(Methods.POST, ApiRoutes.ById(id), {body: update});
    const deletePlaceById = async ({id = ""}) => await callApi(Methods.DELETE, ApiRoutes.ById(id));

    return {
        createNewPlace,
        deletePlaceById,
        getAllPlaces,
        getPlaceById,
        updatePlaceById
    }
}