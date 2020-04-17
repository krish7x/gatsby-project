import React from "react"

export default function Services({ src1, src2, src3, title1, title2, title3 }) {
  return (
    <div className="row my-5">
      <div className="col-7 col-sm-7 mx-auto mb-0">
        <div class="card-group bg-theme">
          <div class="card">
            <img
              class="goes here"
              src={src1}
              alt="goes here"
              style={{ height: "380px" }}
            />
            <div class="card-body">
              <h5 class="card-title text-info">{title1}</h5>
              <p class="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur laboriosam voluptatem necessitatibus velit eius
                possimus error! Expedita, laboriosam ad sed tempora perferendis
                nobis quis, consequatur debitis qui architecto veritatis
                explicabo!
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card">
            <img
              class="goes here"
              src={src2}
              alt="goes here"
              style={{ height: "380px" }}
            />
            <div class="card-body">
              <h5 class="card-title text-info">{title2}</h5>
              <p class="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur laboriosam voluptatem necessitatibus velit eius
                possimus error! Expedita, laboriosam ad sed tempora perferendis
                nobis quis, consequatur debitis qui architecto veritatis
                explicabo!
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card">
            <img
              class="goes here"
              src={src3}
              alt="goes here"
              style={{ height: "380px" }}
            />
            <div class="card-body">
              <h5 class="card-title text-info">{title3}</h5>
              <p class="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur laboriosam voluptatem necessitatibus velit eius
                possimus error! Expedita, laboriosam ad sed tempora perferendis
                nobis quis, consequatur debitis qui architecto veritatis
                explicabo!
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
