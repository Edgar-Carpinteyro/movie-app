import React from 'react';
import HasanMovie from './HasanMovie'
import "./Navbar.css"

const Hasan = () =>{
  return (
    <div>
      <h2>Hasan Minhaj</h2>
      <div className='container p-0'>
        <HasanMovie 
          Title="Homecoming King" 
          Year='2017' 
          Description="In his first stand-up special, Hasan Minhaj weaves humorous and heartbreaking anecdotes to tell his life story as an Indian-American Muslim. Topics include racism, bullying and meeting the demanding expectations of his immigrant parents."
          Image="https://api.time.com/wp-content/uploads/2022/10/hasan-minhaj-kings-jester.jpg?quality=85&w=800" />
      </div>
  </div>
  )
}

export default Hasan;



