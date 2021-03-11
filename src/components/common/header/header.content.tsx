import React from "react"
import { ImagesPath } from "../../../utills/constants"

interface HeaderContentType {
  name: String
  type: string
}
const HeaderContent: React.FC<HeaderContentType> = ({ name, type }) => {
  return (
    <div className="app-header__content">
      <div className="app-header-right">
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left">
              <div className="btn-group">
                <div className="p-0 btn">
                  <img
                    width="42"
                    className="rounded-circle"
                    src={ImagesPath.DefaultProfilePic}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="widget-content-left  ml-3 header-user-info">
              <div className="widget-heading">{name}</div>
              <div className="widget-subheading">{type}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HeaderContent }
