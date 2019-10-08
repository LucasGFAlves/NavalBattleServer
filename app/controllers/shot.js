var players = [{connect: false}, {connect: false}];
var totalHits = 18;
var isStarted = false;
var isFinished = false;

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
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]
];
players[0].hitsCount = 0;

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
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]
];
players[1].hitsCount = 0;

currentPlayer = 0;
lastCurrentPlayer = null;
lastRow = null;
lastCol = null;

class ShotController {
    async all(request, response) {
        response.header("Access-Control-Allow-Origin", "*");

        response.json(players);
    }

    async shoot(request, response) {
        response.header("Access-Control-Allow-Origin", "*");

        currentPlayer = 1 - currentPlayer;
        players[currentPlayer].hits[request.params.row][request.params.col] = true;
        let hit = players[currentPlayer].ships[request.params.row][request.params.col] != "agu";
        if (hit)
        {
            players[currentPlayer].hitsCount++;
            if (totalHits == players[currentPlayer].hitsCount)
            {
                isFinished = true;
            }
        }
        lastCurrentPlayer = currentPlayer;
        lastRow = request.params.row;
        lastCol = request.params.col;

        response.json(players[currentPlayer].ships[request.params.row][request.params.col]);
    }

    async connect(request, response) {
        response.header("Access-Control-Allow-Origin", "*");

        let position = 0;
        if (players[position].connect) {
            position++;
        }
        players[position].connect = true;
        if (players[1].connect)
        {
            isStarted = true;
        }
        
        response.json(position);
    }

    async gameControl(request, response) {
        response.header("Access-Control-Allow-Origin", "*");

        response.json({
            isStarted: isStarted,
            isFinished: isFinished,
            currentPlayer: currentPlayer,
            lastCurrentPlayer: lastCurrentPlayer,
            lastRow: lastRow,
            lastCol: lastCol,
            hitsCount: [players[0].hitsCount, players[1].hitsCount]
        });
    }

    async getTables(request, response) {
        response.header("Access-Control-Allow-Origin", "*");

        let ships = [
            [
                [], [], [], [], [], [], [], [], [], []
            ],
            [
                [], [], [], [], [], [], [], [], [], []
            ]
        ];
        let hits = [
            [
                [], [], [], [], [], [], [], [], [], []
            ],
            [
                [], [], [], [], [], [], [], [], [], []
            ]
        ];

        for (let position = 0; position <= 1; ++position)
        {
            for (let i = 0; i < 10; i++)
            {
                for (let j = 0; j < 10; j++)
                {
                    if (request.params.id != position && players[position].hits[i][j] == 0)
                    {
                        ships[position][i][j] = "unk";
                    }
                    else
                    {
                        ships[position][i][j] = players[position].ships[i][j];
                    }
                    hits[position][i][j] = players[position].hits[i][j];
                }
            }
        }
        response.json({ships: ships, hits: hits});
    }
}


module.exports = ShotController;
