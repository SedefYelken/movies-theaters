import { useState, useEffect } from 'react';
import './style.css';

const Movies = () =>{

    //const [moviesResponse, setMoviesResponse] = useState<any[]>([]);

    const moviesResponse =  [
        {
            "id":1,
            "name":"Inception (2010) – 8.7",
            "imgURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2p8o34BToY8_4PT6Tm4S_niuP12goAi5lSw&usqp=CAU",
            "description": "Christopher Nolan proved himself to be one of the most ambitious filmmakers around with his mind-bending crime film, Inception. The film follows a team of thieves with the ability to enter people's dreams and steal their ideas. Leonardo DiCaprio stars as the team's leader, looking to pull off one last score."
        },
        {
            "id":2,
            "name":"Life Is Beautiful (1997) - 8.6",
            "imgURL":"https://static1.srcdn.com/wordpress/wp-content/uploads/2021/02/Life-Is-Beautiful-1997-Cropped.jpg?q=50&fit=crop&w=450&h=225&dpr=1.5 450w",
            "description":"It is a very difficult thing for a movie to combine humor and an uplifting tone inside a story that is also filled with tragedy and heartbreak. But that is something that Life is Beautiful accomplished in the minds of many fans which explains its popular reputation."
        },
        {
            "id":3,
            "name":"The Shawshank Redemption (1994) – 9.3",
            "imgURL":"https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/Shawshank.jpg?q=50&fit=crop&w=450&h=225&dpr=1.5 450w",
            "description":"It's no surprise that the highest-ranked film of all time is also one of the most crowd-pleasing films of all time. It can be easy to assume that a story set inside a maximum-security prison would not have many pleasing moments, but The Shawshank Redemption manages to be a surprisingly uplifting tale."
        },
        {
            "id":4,
            "name":"The Lord Of The Rings - 8.9",
            "imgURL":"https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/Frodo-and-the-One-Ring-from-The-Lord-of-the-Rings-The-Return-of-the-King.jpg?q=50&fit=crop&w=450&h=225&dpr=1.5 450w",
            "description":"Few people thought adapting J.R.R. Tolkien's epic Lord of the Rings series for the big screen would be possible, but Peter Jackson proved them all wrong. With The Return of the King, Jackson managed to conclude one of the greatest film trilogies of all time in a truly satisfying way."
        },
        {
            "id":5,
            "name":"Forrest Gump (1994) – 8.7",
            "imgURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCkOKmvixaDHovw6JFEKo_mtymcYBtXEwlTQ&usqp=CAU",
            "description":"Tom Hanks created perhaps his most iconic film character of all time with the titular character in Forrest Gump. The film follows the many misadventures of a simple yet kind man as he inadvertently inserts himself into many of the biggest moments in American history."
        },
        {
            "id":6,
            "name":"The Dark Knight (2008) – 9.0",
            "imgURL":"https://static0.srcdn.com/wordpress/wp-content/uploads/2016/08/Joker-Behind-Bars.jpg?q=50&fit=crop&w=450&h=225&dpr=1.5 450w",
            "description":"The superhero genre might not get a lot of respect from most cinephiles, but Christopher Nolan's second Batman film proved they can deliver smart, epic, and thrilling movies."
        }
    ]


    const getMoviesResponse = async () => {
    /* 
        const response = await fetch("http://localhost:3002/movies")
        const responseJson: any[] = await response.json();
        */
    }
    
    useEffect(()=> {
        //getMoviesResponse();
    },[])

    return(
        <div className="row background pt7">
            { moviesResponse.map((movie) => (
                <div key={movie.id}>
                    <div className="mb-4 shadow-sm">
                        <div >
                            <h5 className="ml3">{movie.id} - {movie.name}</h5>
                            <img src={movie.imgURL} className="style-img ml3" alt="Sample Movie" />
                            <p className="pb3">{movie.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Movies;