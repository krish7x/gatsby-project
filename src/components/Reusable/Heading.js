import React from "react"

export default function Heading({ title, id }) {
  return (
    <div className="row">
      <div className="col text-center mb-4">
        <h1 className="display-5 " id={id}>
          {title}
        </h1>
      </div>
    </div>
  )
}
