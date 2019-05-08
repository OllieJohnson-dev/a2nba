import React from 'react';
// import  './Main.css';

class Header extends React.Component{
    render(){
        return(
            <ul>
            <a href="index.html">Teams</a> |
            <a href="players.html">Players</a> |
            <a href="teamstats.html">Team Stats</a> |
            <a href="#">Player Stats</a> |
            <a href="#">Game Stats COMP</a> |
            <a href="#">Live Games</a> |
            <a href="#">Login</a> 
            </ul>
        );
    }
}
//ReactDOM.render(<Header />, document.getElementById('header'));

export default Header;