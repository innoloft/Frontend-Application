import React from 'react'
import "./styles.scss";

const sidebar = ()=>{
    return (
        <div>
            <ul className={'Sidebar__Items'}>
              <li className={'item'}><i className="fas fa-home"></i> Home</li>
              <li className={'item'}><i className="fas fa-user"></i> Account</li>
              <li className={'item'}><i className="fas fa-building"></i> Company</li>
              <li className={'item'}><i className="fas fa-cog"></i> Settings</li>
              <li className={'item'}><i className="far fa-newspaper"></i> News</li>
              <li className={'item'}><i className="fas fa-chart-area"></i> Analytics</li>
            </ul>  
        </div>
    )
}

export default sidebar;