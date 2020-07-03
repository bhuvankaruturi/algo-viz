let stack = [];

const mergeSort = (main, aux, l, r) => {
    if (l < r) {
        let mid = Math.floor(l + (r - l)/2);
        mergeSort(aux, main, l, mid);
        mergeSort(aux, main, mid+1, r);
        merge(main, aux, l, mid, r);
    }
}

const merge = (main, aux, l, mid, r) => {
    let m = mid-l+1;
    let n = r - mid;
    let i = l;
    let j = mid+1;
    let k = 0;
    while (k < (m + n)) {
        let step = {};
        if (i-l === m) {
            step.comp = [j, j];
            step.swap = [k+l, aux[j]];
            main[k+l] = aux[j];
            j++;
        }
        else if (j-(mid+1) === n) {
            step.comp = [i, i];
            step.swap = [k+l, aux[i]];
            main[k+l] = aux[i];
            i++;
        }
        else if (aux[i] < aux[j]) {
            step.comp = [i, j];
            step.swap = [k+l, aux[i]];
            main[k+l] = aux[i];
            i++
        } 
        else {
            step.comp = [i, j];
            step.swap = [k+l, aux[j]];
            main[k+l] = aux[j];
            j++;
        }
        stack.push(step);
        k++;
    } 
}

export const sort = (data) => {
    stack = [];
    mergeSort([...data], [...data], 0, data.length-1);
    return stack;
}