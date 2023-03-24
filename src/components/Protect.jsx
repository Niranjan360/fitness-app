import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Protect = ({child , userdetails}) => {
    return ( 
    <>
    { userdetails!=null ? 
        (child) : (<Navigate to="/login"/>)
    }
    </>
    );
}

let mapStateToProps = (state)=>{
    return {
        userdetails : state
    }
}
export default connect(mapStateToProps)(Protect);