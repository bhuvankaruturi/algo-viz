import {WIDTH, SPACING, HEIGHT, MAX_BAR_HEIGHT, MIN_BAR_HEIGHT} from './constants';

export const generateData = (barWidth=20) => {
    let numPoints = getNumPoints(barWidth);
    let arr = [];
    for (let i = 0; i < numPoints; i++) {
        arr.push(getRandomInt(MAX_BAR_HEIGHT));
    }
    return arr;
}

function getRandomInt(range) {
    return Math.floor( Math.floor(Math.random() * (range - MIN_BAR_HEIGHT)) + MIN_BAR_HEIGHT);
}

export const transform = (datum, index, barWidth) => {
    let x = index * (barWidth + SPACING);
    let y = HEIGHT - datum;
    return `translate(${x}, ${y})`;
}

export const swap = (data, i, j) => {
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
}

const getNumPoints = (barWidth) => {
    return Math.floor(WIDTH / (barWidth + SPACING));
}