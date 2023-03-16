import DB from "@/db/dbController";
import { Methods, sendJson, sendMethodNotAllowed } from "@/util/apiUtil";

export default async function handleAllPlaces(req, res) {
    const { method } = req;

    if (method !== Methods.GET) return sendMethodNotAllowed(res, method, [Methods.GET]);

    const allItems = await DB.findAll();

    if (!allItems) return sendJson(res, []);
    return sendJson(res, allItems);
}
