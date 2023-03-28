import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    let [menu , setMenu] = useState(false);

    return ( 
        <nav>
            <div id="logo">
                <h2>Fit-Bit  </h2>
                <i class='bx bx-dumbbell'></i>
            </div>
            <div className="nav-links">
                <Link to="">Trainer</Link>
                <Link to="">Workouts</Link>
                <Link to="">My workouts</Link>
                <Link to="">BMR Calculator</Link>
                <Link to="">Profile</Link>
            </div>

            <div className="logout-btn">
                <button>Logout</button>
            </div>

            <div className="hamberger"
            onClick={()=>{setMenu(!menu)}}
            >
                <i class='bx bx-menu'></i>
            </div>

           {menu && <div className="menu">
                <Link to="">Trainer</Link>
                <Link to="">Workouts</Link>
                <Link to="">My workouts</Link>
                <Link to="">BMR Calculator</Link>
                <Link to="">Profile</Link>
                <button>Logout</button>
            </div>}

        </nav>
     );
}
 
export default Navbar;