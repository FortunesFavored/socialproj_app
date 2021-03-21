import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Stories extends Component {
    render() {
        const p = this.props.stories
        return (
            <div className="col-md-4">
                <div className="card">
                    <img src={'https://images.unsplash.com/photo-1531214159280-079b95d26139?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcnklMjB0ZWxsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'} className="img-fluid" alt={p.name} />
                    <div className="card-body">
                        <h5 className="card-title">Our story begins</h5>
                        <button onClick={() => this.props.addToStories(p)} className="btn btn-primary">Add to Story</button>
  
                    </div>
                </div>
            </div>
        )
    }
}
