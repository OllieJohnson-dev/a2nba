// import React from 'react';

//var _ = require(`underscore`);
class Players extends React.Component {
    constructor() {
      super();
      this.state = { teams: [] }
      this.onSort = this.onSort.bind(this)
    }
  
    componentDidMount() {    
      fetch('http://localhost:3005/players')
          .then((data) => data.json())
          .then((data) => this.setState( { teams: data } ));

    }
      
    onSort(event, sortKey){
      const data = this.state.teams;
      data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
      this.setState({data})
    }
  

  
    render() {
      return (
          <div>
          <table border={1}>
              <tbody>
              <tr>  <th></th>  <th><a style={{color: 'blue'}} onClick={e => this.onSort(e, 'TEAMCODE')}>Code</a></th><th><a style={{color: 'blue'}} onClick={this.sortByName}>Name</a></th>
</tr>
              {this.state.teams.map( (item) => {
                  return <tr key={item.TEAMCODE}><td><img height={20} width={20} src={'logos/' + item.TEAMCODE + '_logo.svg'}></img></td><td>{item.TEAMCODE}</td><td>{item.NAME}</td></tr>;
              })}
              </tbody>
          </table>
          </div>
      );
    }
  }
  
  ReactDOM.render(<Players />, document.getElementById('players'));
  