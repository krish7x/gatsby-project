import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"

export default class CourseCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      myCourses: props.courses.edges,
    }
  }
  render() {
    //console.log(this.state);

    return (
      <section>
        <div className="container">
          <Heading title="COURSES" />
          <div className="row">
            {this.state.myCourses.map(({ node }) => {
              return (
                <div className="col-11 col-md-6 mx-auto d-flex mb-5">
                  <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-0">{node.title}</h5>
                      <h5 className="mb-0 text-info">$ {node.price}</h5>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                    <button
                      data-item-id={node.id}
                      data-item-name={node.title}
                      data-item-price={node.price}
                      data-item-image={node.image.fixed.src}
                      data-item-url="https://learncodeonline.in"
                      className="btn btn-primary snipcart-add-item"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
