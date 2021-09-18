import React, { useContext } from 'react'
import { DarkModeContext } from '../../App';
import img1 from '../../assets/undraw_Add_to_cart_re_wrdo.svg'
import img2 from '../../assets/undraw_Before_dawn_re_hp4m.svg'
import img3 from '../../assets/undraw_Gaming_re_cma2.svg';

function Service() {
    const [darkMode] = useContext(DarkModeContext);
    return (
        <div className="container pb-5">
            <div className="row">
                <div className="col-md-4">
                    <div className={darkMode ? "card card-dark ms-auto me-auto" : "card card-light ms-auto me-auto"} style={{ width: "18rem" }}>
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={darkMode ? "card card-dark ms-auto me-auto" : "card card-light ms-auto me-auto"} style={{ width: "18rem" }}>
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={darkMode ? "card card-dark ms-auto me-auto" : "card card-light ms-auto me-auto"} style={{ width: "18rem" }}>
                        <img src={img3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
