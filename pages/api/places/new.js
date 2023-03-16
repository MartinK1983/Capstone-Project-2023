import DB from "@/db/dbController";
import { Methods, sendJson, sendMethodNotAllowed, sendServerError } from "@/util/apiUtil";

export default async function handleNewPlace(req, res) {
    const { method } = req;
    
    if (method !== Methods.POST) return sendMethodNotAllowed(res, method, [Methods.POST]);

    const insertedItem = await DB.insertOne();

    if (!insertedItem) return sendServerError(res);
    return sendJson(res, insertedItem);
  }
  