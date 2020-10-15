import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Feed from './Feed/Feed';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';
import Widget from './Widgets/Widget';

class App extends Component {
  render() {
    if(this.props.err){
      console.log(this.props.err);
      alert("Error: Something Fishy Happend Please reload. ");
      alert(this.props.err);
    }
    return (
      <div className="app">
        {this.props.user.displayName!==""
        ?
        <React.Fragment>
          <Sidebar/>
          <Feed/>
          <Widget/>
        </React.Fragment>
        :
        <Login/>
        }
      </div>
    );
  }
};

const mapStateToProps = (state) =>{
  return{
    user: state.auth.user,
    err: state.auth.err
  }
}

export default connect(mapStateToProps)(App);
