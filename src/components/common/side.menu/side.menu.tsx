import React from "react"
import { Link } from "react-router-dom"

const SideMenu: React.FC = () => {
  return (
    <div className="app-sidebar sidebar-shadow">
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">Dashboards</li>
            <li>
              <Link to="" className="mm-active">
                User Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export { SideMenu }
