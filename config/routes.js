var home = require('../app/controllers/home');
var ShotController = require('../app/controllers/Shot');

//you can include all your controllers
module.exports = function (app, passport) {
    var shotController = new ShotController();
    app.get('/all', shotController.all);
    app.get('/shoot/:id/:row/:col', shotController.shoot);
    app.get('/connect', shotController.connect);
    app.get('/isStarted', shotController.isStarted);
}