const { jsonResponse } = require("../controllers/jsonResponse");
const getTokenFromHeader = require("../../src/utils/getTokenFromHeader");
const {verifyAccessToken} = require("../../src/services/verifyToken");

function authenticate(req, res , next){
    const token = getTokenFromHeader(req.headers);

    if(token){
        const decoded = verifyAccessToken(token);
        if(decoded){
            req.user = { ...decoded.user};
            next(); 
        }else{
            res.status(401).json(jsonResponse(401, {
                message: "no hay token"
            }));
        }
    }else{
        res.status(401).json(jsonResponse(401, {
            message: "no hay token"
        }));
    }
}

module.exports = authenticate;