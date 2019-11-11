'user strict'
const jwt = require('jwt-simple');
const moment = require('moment');

var secret = 'secreatKey_';
exports.ensureAuth = function(req, res, next){
    if(!req.headers.authorization){
        return res.status(403).send({message: 'Authentication header not found'});
    } else {
        var token = req.headers.authorization.replace(/['"]+/g, '');
        try{
            var payload = jwt.decode(token, secret);
            if(payload.exp > moment().unix()){
                return res.status(401).send({
                    message: 'EL token ha expirado'
                });
            }
        } catch (ex){
            return res.status(404).send({
                message: 'Invalid token'
            });
        }
    req.user = payload;
    next();
    }
}