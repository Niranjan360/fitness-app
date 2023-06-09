import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Profile = () => {

   let user = useSelector((state)=>{ return state.user } );

   let dispatch = useDispatch();

    return ( 
        <>
        <div>
            <h1>USER PROFILE PAGE  </h1>
            <h1>Username: {user.username} </h1>
            <h1>Email : {user.email} </h1>
            <button
            onClick={()=>{ dispatch( {type:"logout" , payload : null} )  }}
            >
                logout
            </button>
            <hr />
            <Link to="/home">go back to dashboard</Link>
        </div>
        </>
     );
}

export default Profile;