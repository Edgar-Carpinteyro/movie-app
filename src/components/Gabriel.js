import React from 'react';
import GabrielMovie from './GabrielMovie'
import "./Navbar.css"

const Gabriel = () =>{
  return (
    <div>
      <h2>Gabriel Iglesias</h2>
      <div>
        <GabrielMovie 
          Title="Aloha Fluffy" 
          Year='2013' 
          Description="ALOHAAAAA! Gabriel Iglesias is back and doing it Hawaiian style. The Comedy Central star is not showing any signs of slowing down after this amazing performance. Aloha Fluffy is sure to be a classic, making this extended and uncensored special a must-own."
          Image="https://remezcla.com/wp-content/uploads/2022/10/Gabriel_Iglesias_Stadium_Fluffy_Film-1068x801.jpg" />
      </div>
  </div>
  )
}


export default Gabriel;