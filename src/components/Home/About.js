import React from 'react'

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 p-5">
                    <img src={"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80"} className="img-fluid p-5" alt="" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="text-center">About</h1>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni quasi saepe nulla, sapiente voluptates explicabo laboriosam! Beatae, repudiandae vitae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni quasi saepe nulla, sapiente voluptates explicabo laboriosam! Beatae, repudiandae vitae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni quasi saepe nulla, sapiente voluptates explicabo laboriosam! Beatae, repudiandae vitae.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
