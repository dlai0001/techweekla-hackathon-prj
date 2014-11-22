module.exports = function(app) {
  var express = require('express');
  var sheltersRouter = express.Router();

    sheltersRouter.get('/:id', function(req, res) {
    res.send({"shelters":[
        {
            id: 1,
            name: "blah"
        }
    ]});
  });

  app.use('/api/v1/shelters', sheltersRouter);
};
