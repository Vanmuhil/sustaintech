import React from 'react'

export default function Header() {
  return (
    <div>
         <header>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active col-lg-12">
                <div className="row">
                  <div className="card bg-dark text-dark col-lg-6">
                    <img src="https://www.dreamzone.co.in/blog/wp-content/uploads/2023/09/view-3d-house-model.jpg" className="card-img"   width="50%" height="500px" alt="..."/>
                    <div className="card-img-overlay">
                      <h5 className="card-title">Innovating Today for a Sustainable Tomorrow</h5>
                    </div>
                  </div>
                  <div className="card bg-dark text-dark col-lg-6">
                    <img src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2022/12/19130644/New-Challenges-and-Opportunities-in-Civil-Engineering-during-Post-Pandemic-1.png" className="card-img" width="50%" height="500px" alt="..."/>
                    <div className="card-img-overlay">
                      <h3 className="card-title"></h3>
                    </div>
                </div>
                </div>
              </div>
              <div className="carousel-item col-lg-12">
                <div className="row">
                <div className="card bg-dark text-dark col-lg-6">
                    <img src="https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/199_1676390451.png" className="card-img"   width="50%" height="500px" alt="..."/>
                    <div className="card-img-overlay">
                      <h5 className="card-title"></h5>
                    </div>
                  </div>
                  <div className="card bg-dark text-dark col-lg-6">
                    <img src="https://generic.wordpress.soton.ac.uk/cdt-sicities/wp-content/uploads/sites/391/2020/05/Tour-Taxis-belgium-Vincent-Callebaut-1-green-sustainable-architecture-biomimetic-design.jpg" className="card-img" alt="..."  width="50%" height="500px"/>
                    <div className="card-img-overlay">
                      <h5 className="card-title"></h5>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
      </header>
    </div>
  )
}
