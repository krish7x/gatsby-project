import React from "react"

export default function dualphotoblock() {
  return (
    <div className="row">
      <div className="col-10 col-sm-10 mx-auto">
        <div class="card-group bg-theme">
          <div class="card">
            <img
              class="card-img-top"
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="goes here"
              style={{ height: "380px" }}
            />
            <div class="card-body">
              <h5 class="card-title">Hitesh</h5>
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
              class="card-img-top"
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="goes here"
              style={{ height: "380px" }}
            />
            <div class="card-body">
              <h5 class="card-title">Rohit</h5>
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
              class="card-img-top"
              src="https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="goes here"
              style={{ height: "380px" }}
            />
            <div class="card-body">
              <h5 class="card-title">Samantha</h5>
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
