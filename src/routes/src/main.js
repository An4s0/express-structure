const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/main',{
        domain: req.domain
    })
})

module.exports = router;