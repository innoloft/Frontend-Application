import React from 'react'
import classes from "../components/Sidebar.css";

const sidebar = ()=>{
    return (
        <div>
            <ul className={classes.Sidebar__Items}>
              <li className={classes.item}><i className="fas fa-home"></i> Home</li>
              <li className={classes.item}><i class="fas fa-user"></i> Account</li>
              <li className={classes.item}><i class="fas fa-building"></i> Company</li>
              <li className={classes.item}><i class="fas fa-cog"></i> Settings</li>
              <li className={classes.item}><i class="far fa-newspaper"></i> News</li>
              <li className={classes.item}><i class="fas fa-chart-area"></i> Analytics</li>
            </ul>  
        </div>
    )
}

export default sidebar
