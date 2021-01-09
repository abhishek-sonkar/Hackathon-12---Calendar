import React from 'react';
import {useState} from 'react';

export default function MonthnYear() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [year, setYear] = useState("");

    const makeList = (currMonth) => {
        return (<option key={currMonth} value={currMonth}>{currMonth}</option>);
    };
    
    return (
        [
            <select id="month" name="month">{months.map(makeList)}</select>,
            <input id={"year-text-box"} value={year} onChange={(e) => setYear(e.target.value)} />,
            <span id={"year"} >{year}</span>
        ]
    );
}
