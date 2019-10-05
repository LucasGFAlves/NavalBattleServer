var players = [{connect: false}, {connect: false}];

players[0].ships = [
    ["agu", "agu", "agu", "agu", "agu", "ct1", "ct2", "agu", "agu", "agu"], // 1
    ["agu", "sub", "agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu"], // 2
    ["agu", "agu", "agu", "tp1", "tp2", "tp3", "agu", "agu", "agu", "agu"], // 3
    ["agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu"], // 4
    ["agu", "agu", "ct1", "ct2", "agu", "agu", "agu", "agu", "agu", "agu"], // 5
    ["agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu"], // 6
    ["agu", "agu", "pa1", "pa2", "pa3", "pa4", "pa5", "agu", "agu", "agu"], // 7
    ["agu", "agu", "agu", "agu", "agu", "agu", "agu", "sub", "agu", "agu"], // 8
    ["agu", "ft1", "ft2", "ft3", "ft4", "agu", "agu", "agu", "agu", "agu"], // 9
    ["agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu"]  // 10
];

players[0].hits = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

players[1].ships = [
    ["agu", "agu", "agu", "agu", "agu", "ct1", "ct2", "agu", "agu", "agu"], // 1
    ["agu", "sub", "agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu"], // 2
    ["agu", "agu", "agu", "tp1", "tp2", "tp3", "agu", "agu", "agu", "agu"], // 3
    ["agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu"], // 4
    ["agu", "agu", "ct1", "ct2", "agu", "agu", "agu", "agu", "agu", "agu"], // 5
    ["agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu"], // 6
    ["agu", "agu", "pa1", "pa2", "pa3", "pa4", "pa5", "agu", "agu", "agu"], // 7
    ["agu", "agu", "agu", "agu", "agu", "agu", "agu", "sub", "agu", "agu"], // 8
    ["agu", "ft1", "ft2", "ft3", "ft4", "agu", "agu", "agu", "agu", "agu"], // 9
    ["agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu", "agu"]  // 10
];

players[1].hits = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

class ShotController {
    async all(request, response) {
        response.header("Access-Control-Allow-Origin", "*");

        response.json(players);
    }

    async shoot(request, response) {
        response.header("Access-Control-Allow-Origin", "*");

        players[request.params.id].hits[request.params.row][request.params.col] = 1;

        response.json({});
    }

    async connect(request, response) {
        response.header("Access-Control-Allow-Origin", "*");

        let position = 0;
        if (players[position].connect) {
            position++;
        }
        players[position].connect = true;
        
        response.json(position);
    }

    async isStarted(request, response) {
        response.header("Access-Control-Allow-Origin", "*");

        response.json({isStarted: players[position].connect});
    }
}


module.exports = ShotController;
