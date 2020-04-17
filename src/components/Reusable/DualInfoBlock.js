import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoBlock({ heading, src }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container text-white">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              maiores esse perferendis iure consequuntur blanditiis perspiciatis
              cupiditate mollitia! Recusandae possimus voluptatibus soluta porro
              eligendi nisi delectus minus enim modi alias sapiente tempore
              libero, officiis molestiae ut, nihil quibusdam repellat!
              Quibusdam, eum quis aliquam nemo temporibus aspernatur officia
              maiores. Aperiam reiciendis porro facilis quibusdam voluptatibus
              dignissimos non, sit placeat magni, unde quod labore ratione.
              Adipisci, id enim? Ex explicabo perspiciatis libero? Placeat
              soluta quod dolor accusantium obcaecati, molestias cupiditate
              praesentium dignissimos ipsum? Pariatur natus earum, dignissimos
              qui alias placeat esse asperiores soluta quo perspiciatis eveniet
              dolores ipsum, cupiditate, veniam cumque amet?
            </p>
          </div>
          <div className="col-4 mb-3">
            <div className="card ">
              <img className="card-img-top" src={src} alt="goes here" />
              <div className="card-body bg-dark">
                <h5 className="card-title text-white text-center mr-5">
                  Click Photos
                </h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Unde, quisquam debitis quidem deserunt quae consequatur!
                </p>
                <Link to="/team/" className="text-white">
                  <button className="btn btn-warning btn-block">
                    {heading}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
