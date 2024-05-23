import React from 'react'

export default function Servise() {
  return (
    <div>
        <section>
        <h1 className="service" id="our"> Our Services</h1>
            <div className="row cow container">
                <div className="card col-lg-3"  style={{ width: '18rem' }}>
                    <img src="https://media.istockphoto.com/id/1138237835/photo/office-engineer.jpg?s=612x612&w=0&k=20&c=GFYEKdiHaSmPsHP1RXlHT_pdX2zFEyBAEC93Zqzk-xw=" className="card-img-top" alt="..."  height="200px"/>
                    <div className="card-body">
                        <h2>Project & Planning</h2>
                        <p className="card-text">seamlessly blending innovative design with eco-friendly solutions for a brighter and greener future</p>
                    </div>
                </div>
    
                <div className="card col-lg-3"  style={{ width: '18rem' }}>
                    <img src="https://s3da-design.com/wp-content/uploads/2022/01/LifeStyle-Homes_build-process.jpg"
                        className="card-img-top" alt="..." height="200px"/>
                    <div className="card-body">
                        <h2>Architectural Modelling</h2>
                        <p className="card-text">leveraging cutting-edge technology to craft detailed, sustainable representations that bring your visionary designs to life.</p>
                    </div>
                </div>
    
                <div className="card col-lg-3"  style={{ width: '18rem' }}>
                    <img src="https://www.civilengineeringforum.me/wp-content/uploads/2017/06/0.jpg"
                        className="card-img-top" alt="..."  height="200px"/>
                    <div className="card-body">
                        <h2>Foundation and Structural Work</h2>
                        <p className="card-text">our construction team specializes in precision foundation and structural work, ensuring the resilient and enduring strength of every project we undertake</p>
                    </div>
                </div>
                <div className="card col-lg-3"  style={{ width: '18rem' }}>
                    <img src="https://storables.com/wp-content/uploads/2023/11/what-is-a-consultant-in-construction-1700045591.jpeg"
                        className="card-img-top" alt="..."  height="200px"/>
                    <div className="card-body">
                        <h2>Consulting & Advisory</h2>
                        <p className="card-text"> our experienced team provides strategic insights and expert guidance, turning your ideas into successful, well-executed constructions</p>
                    </div>
                </div>
            </div>
      </section>
    </div>
  )
}
