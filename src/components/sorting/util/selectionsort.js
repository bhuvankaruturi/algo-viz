let stack = [];

const selectionsort = (data) => {
    for (let i = 0; i < data.length-1; i++) {
        let min = i;
        for (let j = i+1; j < data.length; j++) {
            let step = {comp: [j, min], swap: [j, j]};
            if (data[j] < data[min]) {
                min = j;
            }
            if (j === data.length-1) step.swap = [i, min];
            stack.push(step);
        }
        let temp = data[i];
        data[i] = data[min];
        data[min] = temp;
    }
}

export const sort = (data) => {
    stack = [];
    selectionsort([...data]);
    return stack;
}