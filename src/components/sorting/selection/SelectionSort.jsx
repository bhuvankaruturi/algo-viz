import React, { Component, Fragment } from 'react'

import Algorithm from './Algorithm';
import UseWindowDimensions from '../../general/UseWindowDimensions';
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
            <Fragment>
                <h3 className="text-center my-3">Selection Sort</h3>
                <div className="row justify-content-around">
                    <UseWindowDimensions render={dims => 
                        <Graph className="col-md-7" {...dims} dataUpdate={this.dataUpdate} speed={70} resetStack={this.resetStack}/>
                    }/>
                    <Algorithm className="col-md-4"/>
                </div>
            </Fragment>
        )
    }
}
