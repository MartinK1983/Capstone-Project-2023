export const Methods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE'
}


export const sendMethodNotAllowed = (res, usedMethod, allowedMethods) => {
    res.setHeader('Allow', allowedMethods);
    res.status(405).end(`Method ${usedMethod} Not Allowed`);
    return;
}

export const sendRequestError = (res, status = 400, msg = "Ihre Anfrage ist fehlerhaft.") => res.status(status).end(msg);
export const sendSuccessNoContent = (res) => res.status(200).end();
export const sendServerError = (res) => res.status(500).end();

export const sendNotFound = (res) => res.status(404).end('Das angegebene Element wurde nicht gefunden.');
export const sendJson = (res, data) => res.status(200).json(data);