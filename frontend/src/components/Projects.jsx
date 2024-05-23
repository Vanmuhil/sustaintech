import React from 'react'

export default function Projects() {
  return (
    <div>
         <section>
        <h1 className="service" id="projects">Projects</h1>
        <div className=" col-lg-12 service">
            <div className="row">
            <div className="card bg-white text-dark col-lg-4">
                <img src="https://images.thequint.com/thequint/2024-01/bbc4a6cb-e3e6-43d4-a0b5-245443b0bbda/MTHL.jpg?%20%20%20%20%20%20%20%20%20%20%20%20%20%20auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0" className="card-img projectImage" alt="..." height="500px"/>
                <div className="card-img-overlay">
                  <h5 className="card-title">Mumbai Sea Bridge</h5>
                </div>
              </div>
              <div className="card bg-white text-dark col-lg-4">
                <img src="https://images.timesproperty.com/blog/3738/TP_iStock1083982928_ss_1.jpg"  className="card-img projectImage" alt="..." height="500px"/>
                <div className="card-img-overlay">
                  <h5 className="card-title"> Mumbai Metro</h5>
                </div>
              </div>
              <div className="card bg-white text-dark col-lg-4">
                <img src="https://images.news9live.com/wp-content/uploads/2023/11/dm-expressway.jpg" className="card-img projectImage " alt="..." height="500px"/>
                <div className="card-img-overlay">
                  <h5 className="card-title">Dwaraka Express Highway</h5>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}
