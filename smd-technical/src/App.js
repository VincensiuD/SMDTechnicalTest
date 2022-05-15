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
         <MainCard icon="fb" type="F O L L O W E RS" amount="1987" increment="12" username="@nathanf"/>
         <MainCard icon="twt" type="F O L L O W E R S" amount="1044" increment="99" username="@nathanf"/>
         <MainCard icon="insta" type="F O L L O W E R S" amount="11k" increment="1099" username="@realnathanf"/>
         <MainCard icon="yt" type="S U B S C R I B E R" amount="8239" increment="-144" username="Nathan F."/>
      </div>      
      <h2 style={{color:"white"}}>Overview - Today</h2>
      <div style={style.mainCard}>
        <OverviewCard title="Page Views" number="87" icon="fb" increment="3"/>
        <OverviewCard title="Likes" number="52" icon="fb" increment="-2"/>
        <OverviewCard title="Likes" number="5462" icon="insta" increment="2257"/>
        <OverviewCard title="Profile Views" number="52k" icon="insta" increment="1375"/>
      </div>
      <div style={style.mainCard}>
        <OverviewCard title="Retweets" number="117" icon="twt" increment="303"/>
        <OverviewCard title="Likes" number="507" icon="twt" increment="557"/>
        <OverviewCard title="Likes" number="107" icon="yt" increment="-19"/>
        <OverviewCard title="Total Views" number="1407" icon="yt" increment="-12"/>
      </div>
    </div>
  );
}

export default App;


 const style = { mainCard: { display: "flex", justifyContent: "space-evenly" }}

