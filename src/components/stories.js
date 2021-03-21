import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Stories extends Component {
    render() {
        const s = this.props.stories
        return (
            <div background-image='linear-gradient(to right bottom, rbga(190, 190, 190, 0.5), rgba(220, 220, 220, 0.5))' className="col-md-4">
                <img className='card-img' src={s.img}className="img-fluid" alt='picture related to story'/>
                <div className="card-img-overlay">
                    <h5 className="card-title">{s.title}</h5>
                    <p class='card-text'>{s.content}</p>
                    <button onClick={() => this.props.addToStory(s)} className="btn btn-primary">Add to Story</button>
                </div>
            </div>
        )
    }
}
