// import React from 'react';

//var _ = require(`underscore`);
class LiveGames extends React.Component {
    constructor() {
      super();
      this.state = { teams: [] }
      
    }
  
    componentDidMount() { 
      this.interval = setInterval(() => this.setState({ time: Date.now() }), 5000);
   
      fetch('http://localhost:3005/livegames')
          .then((data) => data.json())
          .then((data) => this.setState( { teams: data } ));

    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    sortByAge = () => {
      console.log("Sorted")
      this.state.teams.sort((a, b) => a - b);
    }
  
    render() {
      return (
        <div>
        <table border={1}>
            <tbody>
            <tr><th>Date</th><th>Time</th><th></th><th></th><th>Away Team</th><th>Pts</th><th>Pts</th><th>Home Team</th><th></th><th></th><th>Attendance</th></tr>
            {this.state.teams.map( (item) => {
              console.log(item)
              

                return <tr key={item.TIME_ET}><td>{item["DATE2019"]}</td><td>{item.TIME_ET}</td><td><img height={20} width={20} src={'logos/' + item.AWAYTEAMCODE + '_logo.svg'}></img></td><td>{item.AWAYTEAMCODE}</td><td>{item.AWAYTEAM}</td><td>{item.AWAYTEAMPTS}</td><td>{item.HOMETEAMPTS}</td><td>{item.HOMETEAM}</td><td>{item.HOMETEAMCODE}</td><td><img height={20} width={20} src={'logos/' + item.HOMETEAMCODE + '_logo.svg'}></img></td><td>{item.ATTENDANCE}</td></tr>;
            })}
            </tbody>
        </table>
        </div>
      );
    }
  }
  
  ReactDOM.render(<LiveGames />, document.getElementById('liveGames'));
  