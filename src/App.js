import './App.css';
import {Routes,Route} from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
import {
  Home,
  Log,
  Contact,
  Register
} from './pages.js';

import {AuthProvider} from './context/auth';
import AuthRoute from './util/AuthRoute';
 
function App(props) {
  return (
    <div className="App" style={{backgroundColor:"#545452"}}>
        <AuthProvider>
        <Routes>
        <Route exact path="/" element={<Home auth={props.auth}/>}/>
        <AuthRoute exact path="/login" element={<Log/>}/>
        <AuthRoute exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Contact/>}/>
        </Routes>
        </AuthProvider>
      {/* <Header></Header>
      <Body></Body> */}
    </div>
  );
}

export default App;
