import React from 'react'
import './app.css';
import Agree from './content/Agree'
import Form from './content/Form'
import { Route,Switch,Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="maintext">온라인 참가신청</div>
      <Switch>
        <Route path="/" component={Agree} exact/>
        <Route path="/form" component={Form}/>
      </Switch>
      <button className="attend" ><Link to ="/form">온라인 참가신청</Link></button>
    </div>
  );
}

export default App;