import React, { Component } from 'react'
import Stories from '../component/stories.js'

export default class home extends Component {
    constructor(){
    super();

    this.state = {
        stories: []
    }
}

componentDidMount(){
    fetch('http://localhost:5000/prompts')
        .then(res => res.json())
        .then(data => this.setState({ stories: data}))
        .catch(error => console.error(error))
}
    render() {
        return (
            <div className='row'>
                {this.state.stories.map(s => <Stories key={s.id} stories={s}/>)}
            </div>
        )
    }
}
