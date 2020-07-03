import React, { Component } from 'react'
import { generateData, transform } from './util/utils';
import { WIDTH, HEIGHT, MAX_BAR_WIDTH, PAUSED, PLAYING, RESET, MIN_BAR_WIDTH } from './util/constants';

export default class Graph extends Component {

    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.update = this.update.bind(this);
        this.pause = this.pause.bind(this);
        this.reset = this.reset.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
    }

    state = {data: [],  step: {}, barWidth: MAX_BAR_WIDTH/2, interval: null, status: PAUSED};

    componentDidMount() {
        this.props.resetStack();
        this.setState({data: generateData(this.state.barWidth)});
    }

    play() {
        if (this.state.status === PAUSED) {
            this.setState({
                interval: setInterval(this.update, (this.state.barWidth/MAX_BAR_WIDTH)  * this.props.speed),
                status: PLAYING
                }
            );
        }
    }

    update() {
        let {data, step, done} = this.props.dataUpdate(this.state.data);
        if (done) {
            if (this.state.interval) clearInterval(this.state.interval);
            this.setState({interval: null, status: RESET, step: {}});
        } else {
            this.setState({data, step});
        }
    }

    pause() {
        if (this.state.status === PLAYING) {
            clearInterval(this.state.interval);
            this.setState({interval: null, status: PAUSED});
        }
    }

    reset() {
        if (this.state.status === RESET) {
            if (this.state.interval) clearInterval(this.state.interval);
            this.props.resetStack();
            this.setState({interval: null, status: PAUSED, step:{}, data: generateData(this.state.barWidth)});
        }
    }

    handleSliderChange = (e) => {
        e.preventDefault();
        if (this.state.interval) clearInterval(this.state.interval);
        const barWidth = Number(e.target.value);
        this.props.resetStack();
        this.setState({barWidth, interval: null, status: PAUSED, data: generateData(barWidth)});
    }

    render() {
        const {data, status, barWidth, step} = this.state;
        return (
            <div>
                <svg version="1.1"
                            baseProfile="full"
                            width={WIDTH}
                            height={HEIGHT}
                            xmlns="http://www.w3.org/2000/svg">
                    {data.map((datum, index) => {
                        let fill = "#34b7eb";
                        if (step.comp && 
                            (step.comp[0] === index || step.comp[1] === index)) fill = "green"; 
                        if (step.swap && 
                            step.swap[0] !== step.swap[1] && 
                            (step.swap[0] === index || step.swap[1] === index)) fill = "red";
                        return <rect key={index} x="0" y="0" fill={fill} width={barWidth} height={datum} transform={transform(datum, index, barWidth)}/>
                    })}
                </svg>
                {status === PAUSED && <button onClick={this.play}>Play</button>}
                {status === PLAYING && <button onClick={this.pause}>Pause</button>}
                {status === RESET && <button onClick={this.reset}>Reset</button>}
                <input type="range" min={MIN_BAR_WIDTH} max={MAX_BAR_WIDTH} value={barWidth} onChange={this.handleSliderChange}/>
            </div>
        )
    }
}
