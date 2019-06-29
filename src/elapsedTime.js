import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ElapsedTime extends Component {
    state = {
        status: false,
        decisecond: 0,
        seconds: 0,
        minutes: 0,
        hours: 0
    }

    handleClick = async (e) => {
        e.preventDefault();

        if (this.state.status) {
            clearInterval(this.timer)
            this.setState({ status: false })
        } else {
            let decisecondCounter = 0;
            let secondsCounter = 0;
            let minutesCounter = 0;
            let hoursCounter = 0;
            this.timer = setInterval(() => {
                decisecondCounter = this.state.decisecond + 1
                if (decisecondCounter === 10) {
                    secondsCounter++
                    decisecondCounter = 0
                    if (secondsCounter === 60) {
                        minutesCounter++
                        secondsCounter = 0
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

    render() {
        const { status, decisecond, seconds, minutes, hours } = this.state;
        return(
            <div className='ElapsedTime'>
                <h1>Stopwatch</h1>
                <p>{hours} hours {minutes} minutes {seconds} seconds {decisecond} deciseconds</p> 
                <div className='Buttons'>
                <button onClick={(e) => this.handleClick(e)}>{status ? 'Stop' : 'Start'}</button>
                <button onClick={(e) => this.resetTime(e)}>Reset</button>
                </div>
            </div>
        )
    }

}

export default ElapsedTime;