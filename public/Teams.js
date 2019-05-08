class Teams extends React.Component {
    constructor() {
      super();
      this.state = { teams: [] }

    }
  
    componentDidMount() {    
      fetch('http://localhost:3005/teams')
          .then((data) => data.json())
          .then((data) => this.setState( { teams: data } ));


    }
  
    render() {
      return (
          <div>
          <table border={1}>
              <tbody>
              <tr><th></th><th>Code</th><th>Team</th></tr>
              {this.state.teams.map( (item) => {
                  return <tr key={item.TEAMCODE}><td><img height={20} width={20} src={'logos/' + item.TEAMCODE + '_logo.svg'}></img></td><td>{item.TEAMCODE}</td><td>{item.NAME}</td></tr>;
              })}
              </tbody>
          </table>
          </div>
      );
    }
  }
  
  ReactDOM.render(<Teams />, document.getElementById('teams'));
