import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function InfoBlock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container text-white">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ex, voluptates est quaerat ducimus nobis porro nihil
              expedita minus tenetur ipsa, maxime asperiores possimus
              accusantium nesciunt. Fugit animi numquam vero quam expedita nam
              ex nostrum, quis commodi eos quos consequuntur, suscipit eligendi
              reprehenderit. Ducimus perferendis dolorum quidem, blanditiis
              minima quia beatae consequatur consectetur ad officia aut eveniet
              nisi aspernatur cum!
            </p>
            <Link to="/about/">
              <button
                className="btn btn-warning btn-lg"
                style={{ padding: "8px 15px" }}
              >
                {heading}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
