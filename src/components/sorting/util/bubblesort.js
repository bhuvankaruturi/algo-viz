let stack = [];

const bubbleSort = (data) => {
    let swapped;
    do {
        swapped = false;
        for (let j = 0; j < data.length-1; j++) {
            let step = {comp: [j, j+1], swap: [j, j]};
            if (data[j] > data[j+1]) {
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
                step.swap = [j, j+1];
                swapped = true;
            }
            stack.push(step);
        }
    } while(swapped)
}

export const sort = (data) => {
    stack = [];
    bubbleSort([...data]);
    return stack;
}