import React from "react"

interface TabTitleType {
  title: string
}
const TabTitle: React.FC<TabTitleType> = ({ title }) => {
  return (
    <div className="body-tabs body-tabs-layout tabs-animated body-tabs-animated">
      <div className="nav-item active">
        <span className="nav-link active">{title}</span>
      </div>
    </div>
  )
}

export { TabTitle }
