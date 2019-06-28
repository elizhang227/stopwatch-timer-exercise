import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ElapsedTime extends Component {


    render() {
        let i = 0
        return(
            <div>
                <p>0ms</p> 
                {/* {setInterval(() => {
                    return i = i + 1;
                }, 1000)} */}
                <button>start</button>
                <button>stop</button>
                <button>reset</button>
            </div>
        )
    }

}

export default ElapsedTime;