import React, { Component } from 'react';
import Algorithm from './Algorithm';
import Graph from '../Graph';
import {sort} from '../util/insertionsort';

export default class InsertionSort extends Component {
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
        step.swap[1] *= -1;
        return {data: arr, step, done: false};
    }

    swap(arr, swap) {
        let [i, val] = swap;
        arr[i] = val;
    }

    resetStack() {
        this.stack = [];
        this.done = false;
    }

    render() {
        return (
            <div>
                Insretion Sort
                <Algorithm/>
                <Graph dataUpdate={this.dataUpdate} speed={50} resetStack={this.resetStack}/> 
            </div>
        )
    }
}
