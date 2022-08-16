import logo from './logo.svg';
import './App.css';
import anchormanVid from "./assets/anchormanVid.mp4"
import {TextField} from '@mui/material'

function App() {
  return (
    <div className="App">
      {/* <header className="wrapper"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p className="title-text">
          Welcome to Anchorman. The devs are on it...
        </p> */}
      
      <header className="wrapper"> </header>
      <video src={anchormanVid} autoPlay loop muted/>

      <header className="center-gradient"> </header>
      <header className="center-gradient"> </header>
     
      <div className="content">
        
          <h1>Anchorman</h1>
          <TextField  size="small" 
          className="search" 
          id="search" 
          label="Today's top story..." 
          variant="outlined"   
          inputProps={{ style: { fontFamily: 'Arial, Helvetica, sans-serif', color: 'white'}}}
          />
          <p>60% of the time it works everytime...</p>
       
      </div>
 
      
     
        
      {/* </header> */}
    </div>
  );
}

export default App;
