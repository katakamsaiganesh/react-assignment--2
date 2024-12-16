import { Component } from 'react'

import './index.css' 


class RandomNumGenerator extends Component{
    state={count:0} 

    increase=()=>{
        const sai=Math.ceil(Math.random()*100) 
        this.setState({count:sai})
    }

    render(){

        const {count}=this.state

        return(
            <div className='main-bg'>
                <div className='card'>
                    <h1>Random Number Generator</h1>
                    <p>Generate a random number range from 0 to 100</p> 
                    <button onClick={this.increase} type='button'>Generate</button> 
                    <p> <span>{count}</span></p>
                </div>
            </div>
        )
    }
}

export default RandomNumGenerator