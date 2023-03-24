import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Dashboard = ( {userdetails , remove_user} ) => {
    return ( 
      <>
     <div>
            <nav>
                <Link to="/profile">Profile</Link>
                <button onClick={remove_user}>Logout</button>
            </nav>


            <h1> {userdetails.username} </h1>
            <h1> {userdetails.email} </h1>
            <h1> {userdetails.password} </h1>            

            <button>Logout</button>
        </div>
      </>
     );
}
 
let mapStateToProps = (state)=>{
    return { 
        userdetails : state
    };
}

let mapDispatchToProps = (dispatch)=>{
    return {
        remove_user : ()=>{ dispatch( {type:"logout" , payload : null} )  }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);