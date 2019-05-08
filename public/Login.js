
class Login extends React.Component {
    constructor() {
      super();
      this.state = { 
          teams: []         
         
        }
      
    }
  
    componentDidMount() { 
      fetch('http://172.16.234.129:3005/playerstats')
          .then((data) => data.json())
          .then((data) => this.setState( { teams: data } ));

        

    }


    render() {
        var message='You are not logged in';
      return (
          
        <div>
              <p>{message}</p>
              <table border={1} >
  <tr>
    <th>Email:</th>
    <td><input type="text" name="email"></input></td>
  </tr>
  <tr>
    <th>Password:</th>
    <td><input type="password" name="password"></input></td>
  </tr>
  <tr>
    <th></th>
    <td><input type="submit" value="Submit"></input></td>
  </tr>
  
</table>
       
          </div>
      );
    }
  }
  
  ReactDOM.render(<Login />, document.getElementById('login'));
  