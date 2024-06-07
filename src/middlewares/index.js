const domainMiddleware = (req, res, next) => {
    const domain = require("../configs/app.config").domain;
    req.domain = domain;
    next();
};

module.exports = domainMiddleware;