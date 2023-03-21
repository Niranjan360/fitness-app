import { connect } from "react-redux";

const Dashboard = ( {userdetails} ) => {
    return ( 
        <div>
            <h1>
                dashboard page
            </h1>

            <h1> {userdetails.username} </h1>
            <h1> {userdetails.email} </h1>
            <h1> {userdetails.password} </h1>


            

            <button>Logout</button>
        </div>
     );
}
 
let mapStateToProps = (state)=>{
    return { 
        userdetails : state
    };
}



export default connect(mapStateToProps)(Dashboard);