const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: '+ req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not suuported on /promotions');
})
.delete((req, res, next) => {
    res.end('deleting all the promotions!');
});


promoRouter.route('/:promoId')
.get((req, res, next) => {
    res.end('Will send the details of the promotion ' + req.params.promoId + ' to you!');
})
.post((req, res, next) => {
    res.setHeader = 403;
    res.end('POST operation not suuported on ' + req.params.promoId);
})
.put((req, res, next) => {
    res.end('Updating the promotion: ' + req.params.promoId);
})
.delete((req, res, next) => {
    res.end('deleting the promotion ' + req.params.promoId + '!');
});


module.exports = promoRouter;