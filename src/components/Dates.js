import React from 'react';

export default function Dates() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var datess = [];
    
    for(let i=1; i<=31; i++) {
        datess.push(i);
    }

    console.log(datess);

    const tableHead = (currDay) => {
        return (<th key={currDay}>{currDay}</th>);
    };

    const tableData = (currDate) => {
        return (<td key={currDate}>{currDate}</td>);
    };
    
    return (
        <table>
            <thead>{days.map(tableHead)}</thead>
            <tbody>{datess.map(tableData)}</tbody>
        </table>
    );
}