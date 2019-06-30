import React, { Component } from 'react';

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
            let secondsCounter = 59;
            let minutesCounter = this.state.test;
            let hoursCounter = this.state.hours;
            if (minutesCounter < 60) {
                minutesCounter = this.state.test - 1
            } else if (minutesCounter == 60) {
                minutesCounter = 59
                hoursCounter--
            } else {
                minutesCounter = this.state.test % 60 - 1
                hoursCounter = Math.floor(this.state.test / 60)
            }
            this.timer = setInterval(() => {
                decisecondCounter = this.state.decisecond + 1
                if (decisecondCounter === 10) {
                    secondsCounter--
                    decisecondCounter = 0
                    if (secondsCounter === 55) { // 55 -> 0
                        if (minutesCounter === 0 & secondsCounter === 55) {
                            clearInterval(this.timer)
                            secondsCounter = 0
                            alert('Timer finished')
                            this.setState({
                                status: false
                            })
                        } else if (minutesCounter == 0) { // 59 -> 0
                            hoursCounter--
                            minutesCounter = 59
                        } else {
                            minutesCounter--
                            secondsCounter = 59
                        }
                    }
                }
                this.setState({ 
                    decisecond: decisecondCounter, 
                    seconds: secondsCounter, 
                    minutes: minutesCounter, 
                    hours: hoursCounter, 
                    status: true 
                }) 
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
        let set = this.state.test
        let mins;
        let hours = 0;
        if (set == 60) { // runs with == not === 
            mins = 0
            hours = 1
        } else if (set > 60 && set < set + 60) {
            hours = Math.floor(set / 60)
            mins = set % 60
        } else {
            mins = set
        }
        this.setState({
            minutes: mins,
            hours: hours
        })
        e.target.reset();
    }

    logInput = async (e) => {
        e.preventDefault();

        let num = e.target.value
        this.setState({
            test: num
        })
    }

    render() {
        const { status, seconds, minutes, hours } = this.state;
        return(
            <div className='Timer'>
                <h1>Timer</h1>
                <p>{hours} hours {minutes} minutes {seconds} seconds</p>
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