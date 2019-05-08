
class Teamstats extends React.Component {
    constructor() {
      super();
      this.state = { teams: [] }
      
    }
  
    componentDidMount() {    
      fetch('http://localhost:3005/teamstats')
          .then((data) => data.json())
          .then((data) => this.setState( { teams: data } ));

    }

  
    render() {
      return (
          <div>
          <table border={1}>
              <tbody>
              <tr><th></th><th>Code</th><th>Team</th><th>GP</th><th>W</th><th>L</th><th>WIN%</th><th>MIN</th><th>PTS</th><th>FGM</th><th>FG%</th></tr>

              {this.state.teams.map( (item) => {
                  return <tr key={item.TEAMCODE}><td><img height={20} width={20} src={'logos/' + item.TEAMCODE + '_logo.svg'}></img></td><td>{item.TEAMCODE}</td><td>{item.NAME}</td><td>{item.GP}</td><td>{item.W}</td><td>{item.L}</td><td>{item["WIN%"]}</td><td>{item.MIN}</td><td>{item.PTS}</td><td>{item.FGM}</td><td>{item["FG%"]}</td></tr>;
              })}
              </tbody>
          </table>
          </div>
      );
    }
  }
  
  ReactDOM.render(<Teamstats />, document.getElementById('teamstats'));
  