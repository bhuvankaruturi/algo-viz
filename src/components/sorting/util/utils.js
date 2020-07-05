import {SPACING } from './constants';

export const generateData = (width=500, barWidth=20, height=400) => {
    const maxBarHeight = height * 0.85;
    const minBarHeight = height * 0.1;
    let numPoints = getNumPoints(width, barWidth);
    let arr = [];
    for (let i = 0; i < numPoints; i++) {
        arr.push(getRandomInt(maxBarHeight, minBarHeight));
    }
    return arr;
}

function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

export const transform = (datum, index, barWidth, height=400) => {
    let x = index * (barWidth + SPACING);
    let y = height - datum;
    return `translate(${x}, ${y})`;
}

export const swap = (data, i, j) => {
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
}

const getNumPoints = (width, barWidth) => {
    return Math.floor(width / (barWidth + SPACING));
}