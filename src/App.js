import React from 'react'
import '../src/style/SASS/app.css';
import Header from '../src/components/Navbar'
import Slide from './components/Home/Slide';
import Cards from './components/Home/Cards';
import FooterImage from './components/Home/FooterImage';
import LoadExtra from './components/Home/LoadExtra';

function App() {
  return (
  //   <div className="App">
  //   <Header />
  //   <Slide />
  //   <Cards />
  //   <FooterImage />
  // </div>
  <div>
        <Header/>
      <div className="main-container">
        
        <Slide />
        <Cards />
        <LoadExtra />
        <FooterImage />
      </div>
  



  </div>
  
  );
}

export default App;
