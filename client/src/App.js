import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Protectedroutes from './components/authentication/Protectedroutes';
import CreateComponent from './components/CreateComponent';
import Signup from './components/Signup';
import Blog from './components/Blog';
import Blogpost from './components/Blogpost';

class App extends Component {
  render() {
    return (
  
      <Router>

      <Layout>

   
      <Switch>
 
 <Route exact path="/"  component={() => <Home/>} />
 <Route exact path="/login"  component={(props) => <Login {...props}/>} />
 <Route exact path="/signup"  component={(props) => <Signup {...props}/>} />
 <Route exact path="/blogpost" component={(props) => <Blogpost {...props}/>}/>
 <Route exact path="/blog"  component={(props) => <Blog {...props}/>} />
 

 <Protectedroutes exact path="/create" component={(props)=><CreateComponent {...props}/>}  />
 
 


</Switch>




 

      </Layout>
    



  
     


    </Router>
    );
  }
}

export default App;
