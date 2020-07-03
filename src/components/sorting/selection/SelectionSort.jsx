import React, { Component } from 'react'

import Algorithm from './Algorithm';
import Graph from '../Graph';
import {sort} from '../util/selectionsort';

export default class SelectionSort extends Component {
    constructor(props) {
        super(props);
        this.dataUpdate = this.dataUpdate.bind(this);
        this.resetStack = this.resetStack.bind(this);
    }

    stack = [];
    done = false;

    dataUpdate(data) {
        if (this.stack.length === 0 && !this.done) {
            this.stack = sort(data);
            this.done = true;
        } else if (this.stack.length === 0 && this.done) {
            return {data, done: true};
        }
        let arr = [...data];
        let step = this.stack.shift();
        this.swap(arr, step.swap);
        return {data: arr, step, done: false};
    }  

    swap(data, swap) {
        let [i, j] = swap;
        if (i === j) return;
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
    }


    resetStack() {
        this.stack = [];
        this.done = false;
    }

    render() {

        return (
            <div>
                Selection Sort
                <Algorithm />
                <Graph dataUpdate={this.dataUpdate} speed={100} resetStack={this.resetStack}/>
            </div>
        )
    }
}
