let stack = [];

const insertionsort = (data) => {
    for (let i = 1; i < data.length; i++) {
        let key = data[i];
        let j = i-1;
        while (j >= 0 && data[j] > key) {
            stack.push({comp: [j, j+1], swap: [j+1, data[j]]});
            data[j+1] = data[j];
            j--;
        }
        stack.push({comp: [j+1, i], swap: [j+1, key]});
        data[j+1] = key;
    }
}

export const sort = (data) => {
    stack = [];
    insertionsort([...data]);
    return stack;
}