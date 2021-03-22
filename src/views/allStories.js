import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class creatPost extends Component {
    constructor(){
        super();

        this.state = {
            stories: []
        }
    }

    async componentDidMount(){
        let res = await fetch(`http://localhost:5000/prompts`)
        let data = await res.json()
        this.setState( { stories:data })
        
    }


    render() {
        return (
            <React.Fragment>
                <div className='card-deck'>
                    <div className='col-sm-4'>

                        <ul>
                            {this.state.stories.reverse().map(s => (
                                <li className='list-group-item' key={s.id}>
                            
                            
                                <div className="card-body">
                                    <div background-image='linear-gradient(to right bottom, rbga(190, 190, 190, 0.5), rgba(220, 220, 220, 0.5))'>
                                    <img src='..\assets\Woodie.jpg' alt='none'/>
                                    <h5 className="card-title">{s.title}</h5>
                                    <p className='card-text'>{s.prompt}</p>
                                    <Link to='/stories/:id'>
                                    <button className='btn btn-secondary'>Add to Story</button>
                                    </Link>
                                </div>
                                
                                <div className="card-body">
                                    <h5 className="card-title">{s.title}</h5>
                                    <p className='card-text'>{s.content}</p>
                                    <Link to='/stories/:id'>
                                    <button className='btn btn-secondary'>Add to Story</button>
                                    </Link>
                                </div>


                            </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
