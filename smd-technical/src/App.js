import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { MainCard } from "./Components/MainCard";
import { OverviewCard } from "./Components/OverviewCard";
import { useEffect, useState } from "react";

function App() {

  let mode = localStorage.getItem("Mode");
  function retrievePreferredMode(){
   
  if(mode ==="Dark"){
    return false;
  }
  else{
    return true;
  }
  }

  const [darkMode, setDarkMode] = useState(retrievePreferredMode);
  
  let [bgColour, setBgColour] = useState("");
  let [cardBgColour,setCardBgColour] = useState("");
  let [txtColour1,setTxtColour1] = useState("")
  let [txtColour2,setTxtColour2] = useState("")
  
  useEffect( () => {themeMode()},[])




  function themeMode() {
    if (!darkMode) {
      setDarkMode(true);
      localStorage.setItem("Mode","Dark");
      setBgColour("hsl(230, 17%, 14%)");
      setCardBgColour("hsl(228, 28%, 20%)");
      setTxtColour1("hsl(228, 34%, 66%)");
      setTxtColour2("hsl(0, 0%, 100%)");
      
    } 
    else if (darkMode) {
      setDarkMode(false);
      localStorage.setItem("Mode","Light");
      setBgColour("hsl(0, 0%, 100%)");
      setCardBgColour("hsl(227, 47%, 96%)");
      setTxtColour1("hsl(228, 12%, 44%)");
      setTxtColour2("hsl(230, 17%, 14%)");
     
  }
}

  let mockAPI = [
    {
      icon: "fb",
      type: "FOLLOWERS",
      amount: "1987",
      increment: "12",
      username: "@nathanf",
    },
    {
      icon: "twt",
      type: "FOLLOWERS",
      amount: "1044",
      increment: "99",
      username: "@nathanf",
    },
    {
      icon: "insta",
      type: "FOLLOWERS",
      amount: "11k",
      increment: "1099",
      username: "@realnathanf",
    },
    {
      icon: "yt",
      type: "SUBSCRIBER",
      amount: "8239",
      increment: "-144",
      username: "Nathan F.",
    },
  ];

  let mockAPI2 = [
    { title: "Page Views", number: "87", icon: "fb", increment: "3" },
    { title: "Likes", number: "52", icon: "fb", increment: "-2" },
    { title: "Likes", number: "5462", icon: "insta", increment: "2257" },
    { title: "Profile Views", number: "52k", icon: "insta", increment: "1375" },
    { title: "Retweets", number: "117", icon: "twt", increment: "303" },
    { title: "Likes", number: "507", icon: "twt", increment: "557" },
    { title: "Likes", number: "107", icon: "yt", increment: "-19" },
    { title: "Total Views", number: "1407", icon: "yt", increment: "-12" },
  ];

  return (
    <div className="App" style={{ backgroundColor: bgColour }}>
      <Header totalFollowers="23,004" themeFunction={themeMode} txtColour1={txtColour1} txtColour2={txtColour2}/>
      <div style={style.mainCard}>
        {mockAPI.map((x) => (
          <MainCard
            icon={x.icon}
            type={x.type}
            amount={x.amount}
            increment={x.increment}
            username={x.username}
            txtColour1={txtColour1}
            txtColour2={txtColour2}
            mode={darkMode}
          />
        ))}
      </div>
      <h2 style={{ color: txtColour1, paddingLeft:50 }}>Overview - Today</h2>
      <div className="overview" style={style.overviewCard}>
        
          {mockAPI2.map(x => <OverviewCard title={x.title} number={x.number} icon={x.icon} increment={x.increment}
          bgColour={cardBgColour} txtColour1={txtColour1} txtColour2={txtColour2}
          />)}
          
      </div>
      <div className="individual-cards">
        <p>XXX</p>
      </div>
      
    </div>
  );
}

export default App;

const style = { 
  mainCard: { display: "flex", justifyContent: "space-evenly", flexWrap:"wrap" },
 overviewCard: { display: "flex", justifyContent: "space-evenly", flexWrap:"wrap" }
};

//   <MainCard icon="fb" type="F O L L O W E R S" amount="1987" increment="12" username="@nathanf"/>
//  <MainCard icon="twt" type="F O L L O W E R S" amount="1044" increment="99" username="@nathanf"/>
//  <MainCard icon="insta" type="F O L L O W E R S" amount="11k" increment="1099" username="@realnathanf"/>
//  <MainCard icon="yt" type="S U B S C R I B E R" amount="8239" increment="-144" username="Nathan F."/>


// <OverviewCard title="Page Views" number="87" icon="fb" increment="3" />
// <OverviewCard title="Likes" number="52" icon="fb" increment="-2" />
// <OverviewCard
//   title="Likes"
//   number="5462"
//   icon="insta"
//   increment="2257"
// />
// <OverviewCard
//   title="Profile Views"
//   number="52k"
//   icon="insta"
//   increment="1375"
// />
// </div>
// <div style={style.mainCard}>
// <OverviewCard
//   title="Retweets"
//   number="117"
//   icon="twt"
//   increment="303"
// />
// <OverviewCard title="Likes" number="507" icon="twt" increment="557" />
// <OverviewCard title="Likes" number="107" icon="yt" increment="-19" />
// <OverviewCard
//   title="Total Views"
//   number="1407"
//   icon="yt"
//   increment="-12"
// />