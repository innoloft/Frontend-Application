import React, { ReactElement } from "react"
import { Header, SideMenu, Footer } from "../"

export interface MainContainerType {
  children: ReactElement
}
const MainContainer: React.FC<MainContainerType> = ({ children }) => {
  return (
    <div className="app-container app-theme-white">
      <Header />
      <div className="app-main">
        <SideMenu />
        <div className="app-main__outer">
          <div className="app-main__inner">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export { MainContainer }
