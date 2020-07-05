import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1 className="display-1">Algorithms Visualizer</h1>
            <div className="row">
                <div className="col-3">
                <h4>Sorting Algorithms</h4>
                <ul className="list-group">
                    <Link className="list-group-item" to="/selection-sort">Selection Sort</Link>
                    <Link className="list-group-item" to="/bubble-sort">Bubble Sort</Link>
                    <Link className="list-group-item" to="/insertion-sort">Insertion Sort</Link>
                    <Link className="list-group-item" to="/merge-sort">Merge Sort</Link>
                </ul>
                </div>
            </div>
        </div>
    )
}
