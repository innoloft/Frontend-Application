import React, { ReactElement } from "react"

interface TabContentType {
  children: ReactElement
}
const TabContent: React.FC<TabContentType> = ({ children }) => {
  return (
    <div className="tab-content mt-3">
      <div className="tab-pane tabs-animation fade show active">
        <div className="row">
          <div className="col-md-12">{children}</div>
        </div>
      </div>
    </div>
  )
}

export { TabContent }
