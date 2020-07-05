import React from 'react'
import {Link}  from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Algo Viz</Link>

            <div className="navbar-nav mr-auto dropdown">
                <div className="nav-link dropdown-toggle">
                    Sorting
                </div>
                <div className="dropdown-content">
                    <Link to="/selection-sort">Selection Sort</Link>
                    <Link to="/bubble-sort">Bubble Sort</Link>
                    <Link to="/insertion-sort">Insertion Sort</Link>
                    <Link to="/merge-sort">Merge Sort</Link>
                </div>
            </div>
        </nav>
    )
}
