const indexController = {
 
      index: function(req, res, next) {
            res.render('index', {title:"universal"})
          }
      }

module.exports = indexController;
