import React from 'react'
import App from './App';

function Links(props) {
  
    return (
       
      <div id="Links">
        <h3>Links</h3>
       
       
         <a href={props.github}>{props.github} </a>
         <br> </br>
         <a href ={props.linkedin}>{props.linkedin}</a>
         
      </div>
      
    );
  }

 
  
  export default Links