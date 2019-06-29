import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
    state = {
        status: false,
        decisecond: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
        test: 0,
    }

    handleClick = async (e) => {
        e.preventDefault();

        if (this.state.status) {
            clearInterval(this.timer)
            this.setState({ status: false })
        } else {
            let decisecondCounter = 0;
            let secondsCounter = 60;
            let minutesCounter = this.state.test - 1;
            let hoursCounter = 0;
            //let initial = this.state.test
            this.timer = setInterval(() => {
                decisecondCounter = this.state.decisecond + 1
                if (decisecondCounter === 10) {
                    secondsCounter--
                    decisecondCounter = 0
                    if (secondsCounter === 55) {
                        minutesCounter--
                        secondsCounter = 60
                        if (minutesCounter === 60) {
                            hoursCounter++
                            minutesCounter = 0
                        }
                    }
                }
                this.setState({ decisecond: decisecondCounter, seconds: secondsCounter, minutes: minutesCounter, hours: hoursCounter, status: true }) 
            },100)
        }
    }

    resetTime = async (e) => {
        e.preventDefault();

        clearInterval(this.timer)
        this.setState({
            status: false,
            decisecond: 0,
            seconds: 0,
            minutes: 0,
            hours: 0
        })
    }

    clearInput = async (e) => {
        e.preventDefault();
        const set = this.state.test
        console.log(set)
        this.setState({
            minutes: set
        })
        e.target.reset();
    }

    logInput = async (e) => {
        e.preventDefault();

        console.log('this is value', e.target.value)
        let num = e.target.value
        this.setState({
            test: num
        })
    }

    render() {
        const { status, decisecond, seconds, minutes, hours, test } = this.state;
        return(
            <div className='ElapsedTime'>
                <h1>Timer</h1>
                <p>{minutes} minutes {seconds} seconds</p>
                <form onSubmit={(e) => this.clearInput(e)}>
                    <input type="text" name="time" placeholder="Enter Desired Minutes" onChange={(e) => this.logInput(e)}></input> 
                </form>
                <div className='Buttons'>
                    <button onClick={(e) => this.handleClick(e)}>{status ? 'Stop' : 'Start'}</button>
                    <button onClick={(e) => this.resetTime(e)}>Reset</button>
                </div>
            </div>
        )
    }

}

export default Timer;