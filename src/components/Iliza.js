import React from 'react';
import IlizaMovie from './IlizaMovie'
import "./Navbar.css"

const Iliza = () =>{
  return (
    <div>
      <h2>Iliza Shlesinger</h2>
      <div >
        <IlizaMovie 
          Title="Confirmed Kills" 
          Year='2016' 
          Description="Iliza Shlesinger performs in this standup talking about dating, feminism and some of the intricacies associated with being a woman in the 21st century."
          Image="https://www.cleveland.com/resizer/2Ci5pWGzY4JjgPXLMlkShAa8534=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/2EBWUJRDPJD35N44RR5H6RBLOU.jpg" />
      </div>
  </div>
  )
}

export default Iliza;
