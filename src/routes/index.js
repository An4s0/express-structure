let express = require('express'),
    router = express.Router();

const checkAuth = (req, res, next) => {
    if (req.user) return next();
}

router.get('/', require('./src/main.js'));


module.exports = router;