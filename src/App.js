import './App.css';
import Header from './components/Header';
import Item from './components/Item'

import Accessories from './assets/Charger.jpg'
import ModelS from './assets/Racecar__ModelS.jpg';
import Model3 from './assets/Sedan__Model3.jpg';
import ModelX from './assets/Defender__ModelX.jpg';
import ModelY from './assets/Rover__ModelY.jpg';
import SolarRoof from './assets/SolarRoof.jpg';
import SolarPanels from './assets/SolarPanels.jpg';


function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__itemsContainer">
        <Item 
          title = 'Model S'
          desc='Order Online for Touchless Delivery'
          backgroundImg={ModelS}
          leftBtnText='CUSTOM ORDER'
          lefttBtnLink=''
          rightBtnText='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item 
          title = 'Model 3'
          desc='Order Online for Touchless Delivery'
          backgroundImg={Model3}
          leftBtnText='CUSTOM ORDER'
          lefttBtnLink=''
          rightBtnText='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title = 'Model X'
          desc='Order Online for Touchless Delivery'
          backgroundImg={ModelX}
          leftBtnText='CUSTOM ORDER'
          lefttBtnLink=''
          rightBtnText='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title = 'Model Y'
          desc='Order Online for Touchless Delivery'
          backgroundImg={ModelY}
          leftBtnText='CUSTOM ORDER'
          lefttBtnLink=''
          rightBtnText='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title = 'Lowest Cost Solar Panels in America'
          desc='Money-back guarantee'
          backgroundImg={SolarPanels}
          leftBtnText='ORDER NOW'
          lefttBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title = 'Solar for New Roofs'
          desc='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
          backgroundImg={SolarRoof}
          leftBtnText='ORDER NOW'
          lefttBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title = 'Accessories'
          desc=''
          backgroundImg={Accessories}
          leftBtnText='SHOP NOW'
          lefttBtnLink=''
          rightBtnText=''
          rightBtnLink=''
          twoButtons='false'
        />
      </div>
    </div>
  );
}

export default App;
