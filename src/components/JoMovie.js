import React, {useState} from 'react'
import MovieRating from './MovieRating'

function JoMovie ({Title, Year, Description, Image,}) {
    const [submit, setSubmit]= useState([])

    const addReview = () => {
        console.log(submit);
        setSubmit([...submit, {
                                userName: `RandomUser${Math.floor(Math.random() * 900)}`,
                                text: `${document.getElementById('new-review').value}`,
                                rating: `${document.getElementById('star').innerHTML} star`,
                                id: Math.floor(Math.random() * 1000)
                            }
      ])

    }
    
    return (
    <div>
        <h3 style={{color: "red"}}>{Title}</h3>
        <div>
            <div>
                <div>
                    <div>
                        <img height='300px' src={Image}></img>
                    </div> 
                    <div className='col'>                      
                        <span>Year: {Year}</span><br></br>
                        <span>Description: {Description}</span><br></br>
                    </div>
                </div>
            </div>
            <div>
                {submit && submit.map(submit => {
                    return(
                        <ul>
                            <li><strong>Movie-Special Review:</strong> {submit.text}</li>
                            <li><strong>Movie Rating:</strong> {submit.rating}</li><br></br>
                        </ul>
                        )
                        }
                    )
                }
            </div>
            <div>
                <a>Leave a Review</a>
                <textarea id='new-review' type='text' rows="4" placeholder='What do you think of this movie?'></textarea>
                <MovieRating /> 
                <button onClick={addReview} type='submit'>Click</button>
            </div>
        </div>
    </div>
    )
}

export default JoMovie