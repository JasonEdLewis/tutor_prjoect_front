import React from 'react';
import '../App.css'

export default function resources(props) {
    return (
        <div className="resources">
            <h1>Welcome to the Resources Page</h1>
            <p>Here is where you will find all of the resources you need for students, administrators and tutors alike.</p>
            <p><a href="https://www.google.com/search?sxsrf=ACYBGNQW8gKhYpPP3HEZa7UwoxQTXtu-cA%3A1571620744535&source=hp&ei=iAetXaSbHcWy5gLduqGAAw&q=8th+grade+math+worksheets+pdf&oq=8th+grade+math+&gs_l=psy-ab.3.4.0l10.2470.5874..8368...0.0..0.248.1156.14j0j1......0....1..gws-wiz.......0i67.wKnTeCGX6Mc">8th Grade Math</a></p>
            <button onClick={() => props.history.push('/profile')}>Back</button>
        </div>
    )
}