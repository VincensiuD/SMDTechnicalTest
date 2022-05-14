import logo from './logo.svg';
import './App.css';
import {Header} from "./Components/Header"
import { MainCard } from './Components/MainCard';
import { OverviewCard } from './Components/OverviewCard';

function App() {
  return (
    <div className="App">
      <Header totalFollowers="23,004"/>
      <div style={style.mainCard}>
         <MainCard icon="fb" type="FOLLOWERS" amount="1987" increment="12"/>
         <MainCard icon="twt" type="FOLLOWERS" amount="1044" increment="99"/>
         <MainCard icon="insta" type="FOLLOWERS" amount="11k" increment="1099"/>
         <MainCard icon="yt" type="SUBSCRIBER" amount="8239" increment="144"/>
      </div>      
      <h2>Overview - Today</h2>
      <OverviewCard/>
    </div>
  );
}

export default App;


 const style = { mainCard: { display: "flex", justifyContent: "space-evenly" }}

