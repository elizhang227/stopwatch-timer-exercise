import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ElapsedTime extends Component {
    state = {
        status: false,
        runningTime: 0
    }

    handleClick = async (e) => {
        e.preventDefault();

        if (this.state.status) {
            clearInterval(this.timer)
            this.setState({ status: false })
        } else {
            this.timer = setInterval(() => {
                let newTime = 0;
                if (newTime === 60) {
                    newTime = 0;
                    this.setState({ runningTime: newTime, status: true })
                } else {
                    newTime = this.state.runningTime + 1
                    this.setState({ runningTime: newTime, status: true }) 
                }
            },1)
        }
    }

    // stopTime = async (e) => {
    //     e.preventDefault();

    //     if (this.state.status) {
    //         clearInterval()
    //     }
    // }

    render() {
        const { status, runningTime } = this.state;
        return(
            <div>
                <p>{runningTime}</p> 
                {/* {setInterval(() => {
                    return i = i + 1;
                }, 1000)} */}
                <button onClick={(e) => this.handleClick(e)}>{status ? 'Stop' : 'Start'}</button>
                <button>reset</button>
            </div>
        )
    }

}

export default ElapsedTime;