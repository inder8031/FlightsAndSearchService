const ClientErrorCodes = Object.freeze({
    Bad_Request: 400,
    UnAuthorised: 401,
    Not_Found: 404,
    Request_Timeout: 408
});

const ServerErrorCodes = Object.freeze({
    Internal_Server_Error: 500,
    Not_Implemented: 501,
    Bad_Gateway: 502,
    Network_Authentication_Required: 511
});

const SuccessCodes = Object.freeze({
    Ok: 200,
    Created: 201,
    Accepted: 202,
    No_Content: 204
});

module.exports = {
    ClientErrorCodes,
    ServerErrorCodes,
    SuccessCodes
}