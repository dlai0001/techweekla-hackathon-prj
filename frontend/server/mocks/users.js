module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();
  usersRouter.get('/:id', function(req, res) {
    res.send({"users":[
        {
            id: 1,
            name: "bob"
        }
    ]});
  });
  app.use('/api/v1/users', usersRouter);
};
