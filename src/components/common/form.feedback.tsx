import React from "react"

interface FeedbackType {
  message: string
}
const FormFeedBack: React.FC<FeedbackType> = ({ message }) => {
  return <div className="invalid-feedback">{message}</div>
}

export { FormFeedBack }
