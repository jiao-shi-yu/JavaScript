let team = {
    _players: [
        {
            firstName: '国梁',
            lastName: '刘',
            age: 30
        },
        {
            firstName: '星驰',
            lastName: '周',
            age: 28
        },
        {
            firstName: '娜',
            lastName: '李',
            age: 25
        }
    ],
    _games: [
        {
            opponent: '日本队',
            teamPoints: 99,
            opponentPoints: 2
        },
        
        {
            opponent: '法国队',
            teamPoints: 16,
            opponentPoints: 48
        },
        
        {
            opponent: '澳大利亚',
            teamPoints: 20,
            opponentPoints: 23
        },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this.games.push(game);
    }
}

// Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);


console.log(team.players);

team.addGame('美国队', 79, 88);
team.addGame('英国队', 99, 66);
team.addGame('叙利亚', 57, 28);

console.log(team.games);