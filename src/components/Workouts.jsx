import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Workouts = () => {

    let [workouts , setWorkouts] =  useState(null);

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'da3e9d6194msh99ca5a70f09bf66p1531afjsncb0199344067',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        
        fetch('https://exercisedb.p.rapidapi.com/exercises', options)
        .then(response => response.json())
        .then(data => { console.log(data); setWorkouts(data)})
        .catch(err => console.error(err));
    } , [])


    return (<div>
        <Navbar/>
        <h1>All workouts</h1>
        {workouts && <div className="all-workouts">
            {
                workouts.map((workout)=>{
                    return(
                        <div>
                            <img src={workout.gifUrl} alt="image not found" />
                            <h4>Workout name : { workout.name } </h4>
                            <p>Body part : {workout.bodyPart}</p>
                            <p>Equipment : {workout.equipment}</p>
                        </div>
                    )
                })
            }
        </div>}

    </div>   );
}
 
export default Workouts;