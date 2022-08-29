import logo from './logo.svg';
import './App.css';
import anchormanVid from "./assets/anchormanVid.mp4"
import {TextField, Card, CardContent, Typography, CardActions, Button, Grid} from '@mui/material'
import React from 'react';
import OutlinedCard from './components/resultCard';

function App() {
  return (
    <div className="App">
     
      <header className="wrapper"> </header>
      <video src={anchormanVid} autoPlay loop muted/>

      <header className="center-gradient"> </header>
      <header className="center-gradient"> </header>
     
      <div className="content">
        
          <h1>Anchorman</h1>
          
          <TextField  size="small" 
            className="search" 
            id="search" 
            label="Today's top story is about..." 
            variant="outlined"   
            inputProps={{ style: { fontFamily: 'Arial, Helvetica, sans-serif', color: 'white'}}}
          />

          <p>60% of the time it works everytime...</p>
       
        {/* <Grid>
        <OutlinedCard result="asdgf"/>
        <OutlinedCard result="asdgf"/>
        <OutlinedCard result="asdgf"/>
        </Grid> */}
      

      </div>

      

    </div>
  );
}

export default App;
