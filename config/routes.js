var home = require('../app/controllers/home');
var ShotController = require('../app/controllers/Shot');

//you can include all your controllers
module.exports = function (app, passport) {
    var shotController = new ShotController();
    app.get('/api/all', shotController.all);
    app.get('/api/shoot/:row/:col', shotController.shoot);
    app.get('/api/connect', shotController.connect);
    app.get('/api/gameControl', shotController.gameControl);
    app.get('/api/getTables/:id', shotController.getTables);
}