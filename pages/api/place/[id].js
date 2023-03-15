import DB from "@/db/dbController";
import { Methods, sendJson, sendMethodNotAllowed, sendNotFound, sendRequestError, sendSuccessNoContent } from "@/util/apiUtil";


const deleteById = async (res, id) => {
    const success = await DB.deleteById(id);
    if (!success) return sendNotFound(res);
    return sendSuccessNoContent(res);
} 

const findById = async (res, id) => {
    const item = await DB.findById(id);
    if (!item) return sendNotFound(res);
    return sendJson(res, item);
}

const updateById = async (res, id, req) => {
    if (!req || !req.body) return sendRequestError(res);

    const updatedItem = await DB.updateById(id, req.body);
    if (!updatedItem) return sendNotFound(res);
    sendJson(res, updatedItem);    
}

export default async function handleById(req, res) {
    const { query, method } = req;

    const id = query.id;
    
    if (!id) return res.status(400).end('Bitte geben Sie eine ID an.');

    switch (method) {
        case Methods.GET: return await findById(res, id);
        case Methods.POST: return await updateById(res, id, req);
        case Methods.DELETE: return await deleteById(res, id);
        default: return sendMethodNotAllowed(res, method, [Methods.GET, Methods.POST, Methods.DELETE]);
    }
}