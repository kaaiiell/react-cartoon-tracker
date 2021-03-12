import logo from './logo.svg';
import './App.css';
import Body from './Body.js';
import Header from './Header.js';

function App() {
  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
  let iso = new Date('2020-12-06T15:10:00+00:00');
  let today = new Date()
  console.log("old",iso);
  iso.setDate(iso.getDate()+7);
  console.log("new",iso);
  console.log(today);
  while((iso-today)<=0){
    iso.setDate(iso.getDate()+7);
  }
  console.log("wow",iso)
  //console.log(y);
  return (
    <div className="App">
      {/*
      Header
      Body
      Footer

      */}
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
