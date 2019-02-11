const team = {
    _players: [
      {
        firstName: 'Ian',
        lastName: 'Gusto',
        age: 5
          },
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstName: 'Clara',
        lastName: 'Cookie',
        age: 3
      },
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Geeks',
        teamPoints: 2,
        opponentPoints: 18
      },
      {
        opponent: 'Nerds',
        teamPoints: 58,
        opponentPoints: 14
      },
    ],
    get player(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(firstName, lastName, age){
      let player = {
        firstName,
        lastName,
        age
      };
      this._players.push(player);
    },
    addGame(name, teamPoints, opponentPoints){
      let game = {
        opponent: name,
        teamPoints,
        opponentPoints
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team._players);
  
  team.addGame('Jerks', 45, 78);
  console.log(team._games);
  
  
  