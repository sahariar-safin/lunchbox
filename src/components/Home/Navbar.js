import React, { useContext } from 'react'
import { DarkModeContext } from '../../App';
import '../../style/Home.css'

function Navbar() {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    return (
        <nav className={`navbar navbar-expand-lg navbarWrapper ${ darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light" }`}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    Navebar
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button onClick={() => setDarkMode(!darkMode)} className={darkMode ? 'btn btn-dark' : 'btn btn-light'}>
                            {darkMode
                                ? <i className="fas fa-sun"></i>
                                : <i className="fas fa-moon"></i>}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
