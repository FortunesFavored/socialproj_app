import React, { Component } from 'react'

export default class creatPost extends Component {
    constructor(){
        super();

        this.state = {
            stories: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/stories')
            .then(res => res.json())
            .then(data => this.setState({ stories:data }))
            .then(error => console.error(error))
    }
    
    render() {
        return (
            <div className='container' id='Container'>
                <img className='card-img' src='/assets/Woodie' alt='name'></img>
                <div className='card' id='card'>
                    <div className='card--header'>
                        <h1>
                            Card Header
                        </h1>
                    </div>
                    <div className='card--body'>
                        Card Body
                        <button className='btn btn-primary'>Button</button>
                    </div>
                </div>
            </div>
        )
    }
}
