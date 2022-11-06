import React from 'react';
import JoMovie from './JoMovie'
import "./Navbar.css"

const Jo = () =>{
  return (
    <div>
      <h2>Jo Koy</h2>
      <div>
        <JoMovie 
          Title="Live from the LA Forum" 
          Year='2022' 
          Description="It follows Jo as he gushes about his relationship with his teenage son along with sharing the struggles of living with sleep apnea and much more."
          Image="https://occ-0-2567-2568.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcAF_o3dRTkiPUSi_GH1qWbHftrgTuN0C1hgJ26q-MTQVbpl3Kb4ZlpoGgjVWTnajATf6EmxT5_8R9HWOMBOi6yoXLrfn5WKYspwC3oR_HgAr7ZSlkwhaLGb4QdiXyzAO_Qy9g.jpg" />
      </div>
  </div>
  )
}

export default Jo;
