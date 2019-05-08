


class PLayerStats extends React.Component {
    constructor() {
      super();
      this.state = { 
          teams: [],
          dropdown: [],
         
        }
      
    }
  
    componentDidMount() { 
      fetch('http://localhost:3005/playerstats')
          .then((data) => data.json())
          .then((data) => this.setState( { teams: data } ));

          fetch('http://localhost:3005/playerstats')
          .then((data) => data.json())
          .then((data) => this.setState( { dropdown: data } ));

        //   fetch('http://172.16.234.129:3005/playerstats')
        //   .then(function(res) {
        //       return res.json();
        //   }).then(function(json) {
        //       this.setState({
        //         dropdown: json
        //       })
        //   });
    }

    handleChange(e){
        this.setState({selectValue:e.target.value});
      }


    render() {
        var message='You selected '+this.state.selectValue;
console.log(message)
      return (
        <div>
        
        <select  value={this.state.selectValue} 
        onChange={this.handleChange}  >{
                 this.state.dropdown.map((obj) => {
                     return <option value={obj.ID}>{obj.NAME}</option>
                 })
              }</select>
            
          <table border={1}>
              <tbody>
              <tr><th></th><th>Code</th><th>Team</th><th>GP</th><th>W</th><th>L</th><th>WIN</th><th>MIN</th><th>PTS</th><th>FGM</th><th>FG%</th><th>3PM</th><th>3P%</th><th>FTM</th><th>FTA</th><th>FT%</th><th>AST</th></tr>

              {this.state.teams.map( (item) => {
                  return <tr key={item.TEAMCODE}><td><img height={20} width={20} src={'logos/' + item.TEAMCODE + '_logo.svg'}></img></td><td>{item.TEAMCODE}</td><td>{item.NAME}</td><td>{item.GP}</td><td>{item.W}</td><td>{item.L}</td><td>{item["WIN%"]}</td><td>{item.MIN}</td><td>{item.PTS}</td><td>{item.FGM}</td><td>{item["FG%"]}</td><td>{item["3PM"]}</td><td>{item["3P%"]}</td><td>{item.FTM}</td><td>{item.FTA}</td><td>{item["FT%"]}</td><td>{item.AST}</td></tr>;
              })}
              </tbody>
          </table>
          </div>
      );
    }
  }
  
  ReactDOM.render(<PLayerStats />, document.getElementById('playerstats'));
  