import React, { Component } from 'react'
import Algorithm from './Algorithm'
import {sort} from '../util/mergesort';
import Graph from '../Graph'

export default class MergeSort extends Component {
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

    swap(data, swap) {
        let [i, val] = swap;
        data[i] = val;
    }

    resetStack() {
        this.stack = [];
        this.done = false;
    }

    render() {
        return (
            <div>
                Merge Sort
                <Algorithm/>
                <Graph dataUpdate={this.dataUpdate} speed={50} resetStack={this.resetStack}/>
            </div>
        )
    }
}
