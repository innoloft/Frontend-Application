import React from "react"
import { HeaderContent } from "./header.content"

const Header: React.FC = () => {
  return (
    <div className="app-header header-shadow">
      <div className="app-header__logo ml-5">
        <h3>Innolosoft</h3>
      </div>

      <HeaderContent name="Umair Shahid" type="Full Stack Dev" />
    </div>
  )
}

export { Header }
