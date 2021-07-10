import React from 'react'

const Calculation = (second: number): Array<number | string> => {

    var hrs: number = Math.floor(second / 3600);
    var mint: number = Math.floor((second - hrs * 3600) / 60);
    var sec: number = second - hrs * 3600 - mint * 60;

    return [
        hrs < 10 ? `0${hrs}` : hrs,
        mint < 10 ? `0${mint}` : mint,
        sec < 10 ? `0${sec}` : sec,
    ];
}


export default Calculation;
