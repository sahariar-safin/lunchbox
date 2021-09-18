import React from 'react'
import img from '../../assets/undraw_Co-working_re_6k5d.svg'
import '../../style/Home.css'

function Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 pt-5 pe-5 d-flex flex-column justify-content-center">
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae totam fugiat dolore, in possimus at animi similique doloribus facere consequatur, laborum nesciunt odit consectetur asperiores deleniti corrupti praesentium sequi? Autem!</h5>
                </div>
                <div className="col-md-6">
                    <img src={img} className="img-fluid p-5" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
